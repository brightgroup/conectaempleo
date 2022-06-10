import React from 'react'
import { Input, InputDate, TextArea } from 'components/input'
import { SelectSearch } from 'components/select'
import { Checkbox } from 'components/check'
import { Button } from 'components/button'
import { createImage } from 'utils/image'

export const UserForm = ({
  utils = {},
  input = {},
  select = {},
  data = {},
  setData = {},
  handleSubmit = () => {},
  cities = [],
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="profile__input-group">
        <Input label="Email" name="email" type="email" value={data?.email} {...input} />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={data?.password}
          placeholder="******"
          {...input}
        />
      </div>
      <hr className="profile__line" />
      <h5 className="bold m-0 m-0 p-0">Información personal</h5>
      <UploadImage setData={setData} data={data} />
      <div className="profile__input-group">
        <Input label="Primer Nombre" name="first_name" value={data?.first_name} {...input} />
        <Input label="Segundo Nombre" name="middle_name" value={data?.middle_name} {...input} />
      </div>
      <div className="profile__input-group">
        <Input label="Primer Apellido" name="first_lastname" value={data?.first_lastname} {...input} />
        <Input label="Segundo Apellido" name="second_lastname" value={data?.second_lastname} {...input} />
      </div>
      <div className="profile__input-group">
        <SelectSearch
          label="Género"
          name="gender_id"
          options={utils?.genders}
          initialValue={data?.gender_id}
          {...select}
        />
        <SelectSearch
          label="Grupo poblacional"
          name="marital_status_id"
          options={utils?.populationGroup}
          initialValue={data?.marital_status_id}
          {...select}
        />
      </div>
      <div className="profile__input-group">
        <SelectSearch
          label="Estado civil"
          name="civil_status_id"
          options={utils?.civilStatus}
          initialValue={data?.civil_status_id}
          {...select}
        />
        <Input label="Rol" name="rol" value={data?.rol} {...input} />
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
      </div>
      <div className="profile__input-group">
        <SelectSearch
          options={cities}
          label="Ciudad"
          name="city_id"
          disabled={!data?.state_id}
          initialValue={data?.city_id}
          {...select}
        />
        <SelectSearch
          options={[]}
          label="Nacionalidad"
          name="nationality_id"
          message="Colombiana"
          {...select}
          required={false}
        />
      </div>
      <div className="profile__input-group">
        <InputDate label="Fecha de nacimiento" name="date_of_birth" value={data?.date_of_birth} {...input} />
        <Input
          label="Número de identificación"
          name="national_id_card_number"
          value={data?.national_id_card_number || ''}
          type="number"
          {...input}
        />
      </div>
      <div className="profile__input-group">
        <Input label="Teléfono" name="phone" value={data?.phone} type="number" {...input} />
        <Input label="Número de teléfono móvil" name="mobile_num" value={data?.mobile_num} type="number" {...input} />
      </div>
      <div className="profile__input-group">
        <TextArea
          name="street_address"
          label="Dirección"
          placeholder="Persona..."
          wrapperClassName="w-100"
          value={data?.street_address}
          {...input}
        />
      </div>
      <hr className="profile__line" />
      <h5 className="bold m-0 m-0 p-0">Programa académico</h5>
      <div className="profile__input-group">
        <SelectSearch
          label="Nivel de carrera"
          name="career_level_id"
          options={utils?.careerLevels}
          initialValue={data?.career_level_id}
          {...select}
        />
        <SelectSearch
          label="Seleccionar industria"
          name="industry_id"
          options={utils?.industries}
          initialValue={data?.industry_id}
          {...select}
        />
      </div>
      <div className="profile__input-group">
        <SelectSearch
          label="Área Funcional"
          name="functional_area_id"
          options={utils?.functionalArea}
          initialValue={data?.functional_area_id}
          {...select}
          required={false}
        />
        <Input
          label="Salario actual"
          placeholder="Salario actual"
          name="current_salary"
          value={data?.current_salary}
          {...input}
        />
      </div>

      <div className="profile__input-group">
        <Input
          label="Sueldo esperado"
          name="expected_salary"
          wrapperClassName="w-50"
          value={data?.expected_salary}
          {...input}
        />
      </div>
      <Checkbox label="Suscríbirse al boletin de noticias" wrapperClassName="mt-2" />
      <Button text="ACTUALIZAR PERFIL Y GUARDAR" wrapperClass="profile__send-button" type="submit" />
    </form>
  )
}

export const UploadImage = ({ setData = () => {}, data = {} }) => {
  const handleChangeImage = ({ target }) => {
    if (target?.files && target?.files[0]) setData({ ...data, image: target?.files[0], newImage: true })
  }

  const getImage = () => {
    if (data?.newImage) return createImage(data?.image)
    return `${process.env.REACT_APP_USER_IMAGE}/${data?.image}`
  }

  return (
    <div className="profile__input-group">
      <p className="bold">Imagen de perfil</p>
      <div className="w-50 relative">
        {data?.image && <img src={getImage()} alt="user" className="profile__user-image" />}
        <label htmlFor="userImage" className="center profile__image-button">
          SELECCIONAR IMAGEN DE PERFIL
        </label>
        <input id="userImage" type="file" className="d-none" onChange={handleChangeImage} />
      </div>
    </div>
  )
}
