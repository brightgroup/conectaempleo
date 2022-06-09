import React from 'react'
import { Input, TextArea } from 'components/input'
import { SelectSearch } from 'components/select'
import { Button } from 'components/button'
import { createImage } from 'utils/image'

export const CompanyForm = ({ data = {}, setData = () => {} }) => {
  return (
    <form>
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
          disabled
          wrapperClassName="flex-1"
        />
      </div>
      <hr className="profile__line" />
      <UploadImage data={data} setData={setData} />
      <div className="profile__input-group">
        <Input label="Nombre de la empresa" name="name" value={data?.name} />
        <Input label="Representante legal" name="legal" />
      </div>
      <div className="profile__input-group">
        <SelectSearch options={[]} label="Tipo de identificación" message="Casado" name="tipo_identificacion" />
        <Input label="Número de identificación" name="identificacion" />
      </div>
      <Button text="DESCARGAR ARCHIVO" wrapperClass="profile__download-button-file center w-100" />
      <div className="profile__input-group">
        <SelectSearch options={[]} label="Sector Productivo" message="Casado" name="tipo_identificacion" />
        <SelectSearch options={[]} label="Clasificación de Entidad" message="Casado" name="tipo_identificacion" />
      </div>
      <div className="profile__input-group">
        <TextArea name="street_address" label="Descripción" placeholder="Compañia..." wrapperClassName="w-100" />
      </div>
      <div className="profile__input-group">
        <SelectSearch options={[]} label="País" message="Casado" name="tipo_identificacion" />
        <SelectSearch options={[]} label="Departamento" message="Casado" name="tipo_identificacion" />
        <SelectSearch options={[]} label="Ciudad" message="Casado" name="tipo_identificacion" />
      </div>
      <div className="profile__input-group">
        <TextArea name="street_address" label="Dirección" placeholder="Calle..." wrapperClassName="w-100" />
      </div>
      <div className="profile__input-group">
        <Input label="Teléfono" name="name" />
        <Input label="Facebook" name="legal" />
      </div>
      <div className="profile__input-group">
        <Input label="Twitter" name="name" />
        <Input label="LinkedIn" name="legal" />
      </div>
      <div className="profile__input-group">
        <Input label="Instagram" name="name" />
      </div>
      <Button text="ACTUALIZAR PERFIL Y GUARDAR" wrapperClass="profile__send-button" />
      <hr className="profile__line" />
    </form>
  )
}

export const UploadImage = ({ setData = () => {}, data = {} }) => {
  const handleChangeImage = ({ target }) => {
    if (target?.files && target?.files[0]) setData({ ...data, image: target?.files[0], newImage: true })
  }

  const getImage = () => {
    if (data?.newImage) return createImage(data?.logo)
    return `${process.env.REACT_APP_COMPANY_IMAGE}/${data?.logo}`
  }

  return (
    <div className="profile__input-group">
      <div className="flex-1">
        <p className="bold">Logo de la empresa</p>
        <img src={getImage()} alt="user" className="profile__user-image" />
      </div>
      <div className="flex-1 relative">
        <label htmlFor="userImage" className="center profile__image-button">
          SELECCIONE EL LOGOTIPO DE LA EMPRESA
        </label>
        <input id="userImage" type="file" className="d-none" onChange={handleChangeImage} />
      </div>
    </div>
  )
}
