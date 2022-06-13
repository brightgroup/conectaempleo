import React, { useMemo } from 'react'
import { Input, InputFile, TextArea } from 'components/input'
import { SelectSearch } from 'components/select'
import { Button } from 'components/button'
import { Error } from 'components/error'
import { createImage } from 'utils/image'
import { getOptions } from 'utils/select'
import { EMPLOYEES_NUMBER, getYears } from 'data/select'

export const CompanyForm = ({
  data = {},
  input = {},
  select = {},
  setData = () => {},
  utils = {},
  cities = [],
  handleSubmit = () => {},
  error = '',
}) => {
  const yearOptions = useMemo(() => getOptions(getYears()), [])

  const employeeOptions = useMemo(() => getOptions(EMPLOYEES_NUMBER), [])

  return (
    <form onSubmit={handleSubmit}>
      <div className="profile__input-group">
        <div className="flex-1 bold">
          <p>Email</p>
          <p>{data.email}</p>
        </div>
        <Input
          label="Contraseña"
          name="password"
          type="password"
          placeholder="******"
          wrapperClassName="flex-1"
          value={data?.password}
          {...input}
          required={false}
        />
      </div>
      <hr className="profile__line" />
      <UploadImage setData={setData} data={data} />
      <div className="profile__input-group">
        <Input label="Nombre de la empresa" name="name" value={data?.name} {...input} />
        <Input label="Representante legal" name="ceo" value={data?.ceo} {...input} />
      </div>
      <div className="profile__input-group">
        <Input label="Tipo de identificación" name="tipo_identificacion" value={data?.tipo_identificacion} {...input} />
        <Input
          label="Número de identificación"
          name="identificacion"
          type="number"
          value={data?.identificacion}
          {...input}
        />
      </div>
      <div className="profile__input-group">
        <InputFile data={data} setData={setData} name="camara_comercio" />
      </div>
      <Button text="DESCARGAR ARCHIVO" wrapperClass="profile__download-button-file center w-100" />
      <div className="profile__input-group">
        <SelectSearch
          label="Sector Productivo"
          name="industry_id"
          options={utils?.industries}
          initialValue={data?.industry_id}
          {...select}
        />
        <SelectSearch
          label="Clasificación de Entidad"
          name="ownership_type_id"
          options={utils?.entities}
          initialValue={data?.ownership_type_id}
          {...select}
        />
      </div>
      <div className="profile__input-group">
        <TextArea
          name="description"
          label="Descripción"
          placeholder="Compañia..."
          wrapperClassName="w-100"
          value={data?.description}
          {...input}
        />
      </div>
      <div className="profile__input-group">
        <SelectSearch
          label="Pais"
          name="country_id"
          options={utils?.countries}
          initialValue={data?.country_id}
          {...select}
        />
        <SelectSearch
          label="Departamento"
          name="state_id"
          options={utils?.departments}
          initialValue={data?.state_id}
          {...select}
        />
        <SelectSearch
          options={cities}
          label="Ciudad"
          name="city_id"
          disabled={!data?.state_id}
          initialValue={data?.city_id}
          {...select}
        />
      </div>
      <div className="profile__input-group">
        <TextArea
          name="location"
          label="Dirección"
          placeholder="Calle..."
          wrapperClassName="w-100"
          value={data?.location}
          {...input}
        />
      </div>
      <div className="profile__input-group">
        <SelectSearch
          label="No. de Empleados"
          name="no_of_employees"
          options={employeeOptions}
          initialValue={data?.no_of_employees}
          {...select}
        />
        <SelectSearch
          label="Establecido en"
          name="established_in"
          options={yearOptions}
          initialValue={data?.established_in}
          {...select}
        />
        <Input label="Sitio Web" name="website" value={data?.website} {...input} />
      </div>
      <div className="profile__input-group">
        <Input label="Teléfono" name="phone" value={data?.phone} {...input} />
        <Input label="Facebook" name="facebook" value={data?.facebook} {...input} />
      </div>
      <div className="profile__input-group">
        <Input label="Twitter" name="twitter" value={data?.twitter} {...input} />
        <Input label="LinkedIn" name="linkedin" value={data?.linkedin} {...input} />
      </div>
      <Button text="ACTUALIZAR PERFIL Y GUARDAR" wrapperClass="profile__send-button" type="submit" />
      {error && <Error error={error} />}
      <hr className="profile__line" />
    </form>
  )
}

export const UploadImage = ({ setData = () => {}, data = {} }) => {
  const handleChangeImage = ({ target }) => {
    if (target?.files && target?.files[0]) setData({ ...data, logo: target?.files[0], newImage: true })
  }

  const getImage = () => {
    if (data?.newImage) return createImage(data?.logo)
    return `${process.env.REACT_APP_COMPANY_IMAGE}/${data?.logo}`
  }

  return (
    <div className="profile__input-group">
      <div className="flex-1">
        <p className="bold">Logo de la empresa</p>
        {data?.logo && <img src={getImage()} alt="user" className="profile__user-image" />}
      </div>
      <div className="flex-1 relative">
        <label htmlFor="companyImage" className="center profile__image-button">
          SELECCIONE EL LOGOTIPO DE LA EMPRESA
        </label>
        <input id="companyImage" type="file" className="d-none" onChange={handleChangeImage} />
      </div>
    </div>
  )
}
