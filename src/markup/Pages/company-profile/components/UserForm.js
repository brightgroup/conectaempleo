import React from 'react'
import { Input } from 'components/input'
import { SelectSearch } from 'components/select'

export const UserForm = () => {
  const inputProps = { required: true, wrapperClassName: 'mt-3' }

  return (
    <form>
      <div className="company-profile__input-group">
        <Input label="Email" placeholder="Email" name="title" {...inputProps} />
        <Input label="Contraseña" placeholder="Contraseña" name="title" {...inputProps} />
      </div>
      <hr className="company-profile__line" />
      <h5 className="bold m-0 m-0 p-0">Información personal</h5>
      <div className="company-profile__input-group border">
        <Input label="Primer Nombre" placeholder="Primer Nombre" name="title" {...inputProps} />
        <Input label="Segundo Nombre" placeholder="Segundo Nombre" name="title" {...inputProps} />
      </div>
      <div className="company-profile__input-group border">
        <SelectSearch options={[]} message="Seleccione..." label="Género" name="state_id" />
        <SelectSearch options={[]} message="Seleccione..." label="Género" name="state_id" />
      </div>
      <div className="company-profile__input-group">
        <Input label="Primer Apellido" placeholder="Primer Apellido" name="title" {...inputProps} />
        <Input label="Segundo Apellido" placeholder="Segundo Apellido" name="title" {...inputProps} />
      </div>
      <div className="company-profile__input-group">
        <Input label="Teléfono" placeholder="Teléfono" name="title" {...inputProps} />
        <Input label="Número de teléfono móvil" placeholder="Número de teléfono móvil" name="title" {...inputProps} />
      </div>
      <hr className="company-profile__line" />
      <h5 className="bold m-0 m-0 p-0">Programa académico</h5>
    </form>
  )
}
