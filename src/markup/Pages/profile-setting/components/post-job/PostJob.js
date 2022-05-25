import React, { useState } from "react";
import { InputLabel } from "src/components/input";
import { SearchInput } from "src/components/select";
import {
  FUNCTIONAL_AREA,
  SALARY_PERIOD,
  CONTRACT_TYPE,
  WrapperPostJob,
  EXPERIENCE_WORK,
  COIN,
} from ".";

const initialState = {
  name: "",
  description: "",
  skills: "",
  benefist: "",
  salaryPeriod: "",
  coin: "",
  experience: "",
  department: "",
  city: "",
  remunerationMin: "",
  remunerationMax: "",
  training: "",
  typeContract: "",
  vacancies: "",
};

export const PostJob = () => {
  const [jobDescription, setJobDescription] = useState(initialState);

  const handleChangeData = ({ target }) =>
    setJobDescription({ ...jobDescription, [target.name]: target.value });

  return (
    <WrapperPostJob>
      <h3>Publica un trabajo</h3>
      <hr />
      <div className="container--grid">
        <InputLabel
          label="Nombre del cargo"
          placeholder="Nombre"
          name="name"
          onChange={handleChangeData}
          value={jobDescription.name}
        />
        <InputLabel
          label="Descripción"
          placeholder="Competencias"
          name="description"
          onChange={handleChangeData}
          value={jobDescription.description}
        />
      </div>
      <div className="container--grid">
        <InputLabel
          label="Habilidades requeridas"
          placeholder="skills"
          name="skills"
          onChange={handleChangeData}
          value={jobDescription.skills}
        />
        <InputLabel
          label="Beneficios"
          placeholder="Bonificación"
          name="benefist"
          onChange={handleChangeData}
          value={jobDescription.benefist}
        />
      </div>
      <div className="container--grid mt-2">
        <SearchInput
          options={SALARY_PERIOD}
          message="seleccione Periodo salarial"
          label="Periodo salarial"
          setData={setJobDescription}
          name="salaryPeriod"
        />
        <SearchInput
          options={COIN}
          message="Seleccionar"
          label="Moneda"
          setData={setJobDescription}
          name="coin"
        />
      </div>
      <div className="container--grid mt-2">
        <SearchInput
          options={SALARY_PERIOD}
          message="Seleccione..."
          label="Departamento"
          setData={setJobDescription}
          name="department"
        />
        <SearchInput
          options={SALARY_PERIOD}
          message="Seleccione..."
          label="Ciudad"
          setData={setJobDescription}
          name="city"
        />
      </div>
      <div className="container--grid mt-2">
        <InputLabel
          label="Remuneración minima"
          placeholder="1`000.000"
          type="number"
          name="remunerationMin"
          onChange={handleChangeData}
          value={jobDescription.remunerationMin}
        />
        <InputLabel
          label="Remuneración maxima"
          placeholder="5`000.000"
          type="number"
          name="remunerationMax"
          onChange={handleChangeData}
          value={jobDescription.remunerationMax}
        />
      </div>
      <div className="container--grid mt-2">
        <SearchInput
          options={FUNCTIONAL_AREA}
          message="seleccione area funcional"
          label="Formacion"
          setData={setJobDescription}
          name="training"
        />
        <SearchInput
          options={CONTRACT_TYPE}
          message="Seleccionar"
          label="Tipo de contrato"
          setData={setJobDescription}
          name="typeContract"
        />
      </div>
      <div className="container--grid mt-2">
        <InputLabel
          label="vananter disponibles"
          placeholder="number"
          type="number"
          name="vacancies"
          onChange={handleChangeData}
          value={jobDescription.vacancies}
        />
        <SearchInput
          options={EXPERIENCE_WORK}
          message="Seleccionar"
          label="Experiencia laboral"
          setData={setJobDescription}
          name="experience"
        />
      </div>
    </WrapperPostJob>
  );
};
