import React, { useState } from 'react'
import { Input, InputDate, TextArea } from 'components/input'
import { SelectSearch } from 'components/select'
import { Checkbox } from 'components/check'
import { Button } from 'components/button'

export const UserForm = ({
  utils = {},
  data = {},
  setData = {},
  validate = false,
  handleSubmit = () => {},
  cities = [],
}) => {
  const [activatedSelect, setActivatedSelect] = useState('')

  const handleChangeData = ({ target }) => setData({ ...data, [target.name]: target.value })

  const inputProps = { required: validate, onChange: handleChangeData }

  const selectProps = { activatedSelect, setActivatedSelect, setData, required: validate }

  return (
    <form onSubmit={handleSubmit}>
      <div className="company-profile__input-group">
        <Input label="Email" name="email" type="email" value={data?.email} {...inputProps} />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={data?.password}
          placeholder="******"
          disabled
          {...inputProps}
        />
      </div>

      <hr className="company-profile__line" />
      <h5 className="bold m-0 m-0 p-0">Información personal</h5>
      <div className="company-profile__input-group">
        <Input label="Primer Nombre" name="first_name" value={data?.first_name} {...inputProps} />
        <Input label="Segundo Nombre" name="middle_name" value={data?.middle_name} {...inputProps} />
      </div>
      <div className="company-profile__input-group">
        <Input label="Primer Apellido" name="first_lastname" value={data?.first_lastname} {...inputProps} />
        <Input label="Segundo Apellido" name="second_lastname" value={data?.second_lastname} {...inputProps} />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch
          label="Género"
          name="gender_id"
          options={utils?.genders}
          initialValue={data?.gender_id}
          {...selectProps}
        />
        <SelectSearch options={[]} message="Niggi" label="Grupo poblacional" name="state_id" />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch options={[]} label="Estado civil" message="Casado" name="marital_status_id" />
        <SelectSearch options={[]} message="Estudiante" label="Rol" name="rol" />
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
        <SelectSearch
          options={cities}
          label="Ciudad"
          name="city_id"
          disabled={!data?.state_id}
          initialValue={data?.city_id}
          {...selectProps}
        />
        <SelectSearch
          options={[]}
          label="Nacionalidad"
          name="nationality_id"
          message="Colombiana"
          {...selectProps}
          required={false}
        />
      </div>
      <div className="company-profile__input-group">
        <InputDate label="Fecha de nacimiento" name="date_of_birth" value={data?.date_of_birth} {...inputProps} />
        <Input label="Número de identificación" name="id" value={data?.id} type="number" {...inputProps} />
      </div>
      <div className="company-profile__input-group">
        <Input label="Teléfono" name="phone" value={data?.phone} type="number" {...inputProps} />
        <Input
          label="Número de teléfono móvil"
          name="mobile_num"
          value={data?.mobile_num}
          type="number"
          {...inputProps}
        />
      </div>
      <div className="company-profile__input-group">
        <TextArea
          name="street_address"
          label="Dirección"
          placeholder="Persona..."
          wrapperClassName="w-100"
          value={data?.street_address}
          {...inputProps}
        />
      </div>
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
        <SelectSearch
          label="Seleccionar industria"
          name="industry_id"
          options={utils?.industries}
          initialValue={data?.industry_id}
          {...selectProps}
        />
      </div>
      <div className="company-profile__input-group">
        <SelectSearch
          label="Área Funcional"
          name="functional_area_id"
          options={utils?.functionalArea}
          initialValue={data?.functional_area_id}
          {...selectProps}
          required={false}
        />
        <Input
          label="Salario actual"
          placeholder="Salario actual"
          name="current_salary"
          value={data?.current_salary}
          {...inputProps}
        />
      </div>

      <div className="company-profile__input-group">
        <Input
          label="Sueldo esperado"
          name="expected_salary"
          wrapperClassName="w-50"
          value={data?.expected_salary}
          {...inputProps}
        />
      </div>
      <Checkbox label="Suscríbirse al boletin de noticias" wrapperClassName="mt-2" />
      <Button text="ACTUALIZAR PERFIL Y GUARDAR" wrapperClass="company-profile__user-button" type="submit" />
    </form>
  )
}
