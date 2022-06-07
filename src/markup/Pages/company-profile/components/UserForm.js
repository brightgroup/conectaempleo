import React, { useState } from 'react'
import { Input, InputDate, TextArea } from 'components/input'
import { SelectSearch } from 'components/select'
import { Checkbox } from 'components/check'
import { Button } from 'components/button'

export const UserForm = ({ utils = {}, data = {}, setData = {}, validate = false, handleSubmit = () => {} }) => {
  const [activatedSelect, setActivatedSelect] = useState('')

  const handleChangeData = ({ target }) => setData({ ...data, [target.name]: target.value })

  const inputProps = { required: validate, onChange: handleChangeData }

  const selectProps = { activatedSelect, setActivatedSelect, setData }

  return (
    <form onSubmit={handleSubmit}>
      <div className="company-profile__input-group">
        <Input label="Email" name="email" type="email" value={data?.email} {...inputProps} />
        <Input label="Contraseña" name="password" type="password" value={data?.password} {...inputProps} />
      </div>
      {/* <hr className="company-profile__line" />
      <h5 className="bold m-0 m-0 p-0">Información personal</h5>
      <div className="company-profile__input-group">
        <Input label="Primer Nombre" name="first_name" value={data?.first_name} {...inputProps} />
        <Input label="Segundo Nombre" name="middle_name" value={data?.middle_name} {...inputProps} />
      </div>
      <div className="company-profile__input-group">
        <Input label="Primer Apellido" name="first_lastname" value={data?.first_lastname} {...inputProps} />
        <Input label="Segundo Apellido" name="second_lastname" value={data?.second_lastname} {...inputProps} />
      </div> */}
      <div className="company-profile__input-group">
        <SelectSearch
          label="Género"
          name="gender_id"
          options={utils?.genders}
          initialValue={data?.gender_id}
          {...selectProps}
        />
        <SelectSearch options={[]} label="Grupo poblacional" name="state_id" />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch options={[]} label="Estado civil" name="marital_status_id" />
        <SelectSearch options={[]} label="Rol" name="rol" />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch
          label="Pais"
          name="country_id"
          options={utils?.countries}
          initialValue={data?.country_id}
          {...selectProps}
        />
        <SelectSearch
          label="Departamento"
          name="state_id"
          options={utils?.departments}
          initialValue={data?.state_id}
          {...selectProps}
        />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch options={[]} label="Ciudad" name="city_id" {...selectProps} />
        <SelectSearch options={[]} label="Nacionalidad" name="nationality_id" {...selectProps} />
      </div>
      {/* <div className="company-profile__input-group">
        <InputDate label="Fecha de nacimiento" name="date_of_birth" />
        <Input label="Número de identificación" name="title" type="number" {...inputProps} />
      </div>
      <div className="company-profile__input-group">
        <Input label="Teléfono" name="phone" value={data?.phone} {...inputProps} />
        <Input label="Número de teléfono móvil" name="title" {...inputProps} />
      </div> */}
      {/* <div className="company-profile__input-group">
        <TextArea
          name="street_address"
          label="Dirección"
          placeholder="Persona..."
          wrapperClassName="w-100"
          value={data?.street_address}
          {...inputProps}
        />
      </div> */}
      <hr className="company-profile__line" />
      <h5 className="bold m-0 m-0 p-0">Programa académico</h5>
      <div className="company-profile__input-group">
        <SelectSearch
          label="Nivel de carrera"
          name="career_level_id"
          options={utils?.careerLevels}
          initialValue={data?.career_level_id}
          {...selectProps}
        />
        <SelectSearch options={[]} label="Seleccionar industria" name="industry_id" {...selectProps} />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch
          label="Área Funcional"
          name="functional_area_id"
          options={utils?.functionalArea}
          initialValue={data?.functional_area_id}
          {...selectProps}
        />
        {/* <Input
          label="Salario actual"
          placeholder="Salario actual"
          name="current_salary"
          value={data?.current_salary}
          {...inputProps}
        /> */}
      </div>
      {/* <div className="company-profile__input-group">
        <Input
          label="Sueldo esperado"
          name="expected_salary"
          wrapperClassName="w-50"
          value={data?.expected_salary}
          {...inputProps}
        />
      </div> */}
      <Checkbox label="Suscríbirse al boletin de noticias" wrapperClassName="mt-2" />
      <Button text="ACTUALIZAR PERFIL Y GUARDAR" wrapperClass="company-profile__user-button" type="submit" />
    </form>
  )
}
