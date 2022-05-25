import styled from "styled-components";

export const FUNCTIONAL_AREA = [
  "Téctica profesional sistematizada",
  "Técnica profesional en administracion de empresas",
  "Técnica profesional en cosecha de maderables",
  "Técnica profesional en informatica y sistemas",
  "Técnica profesinal en procesos empresariales",
  "Técnica prefesional en produccion forestal",
  "Tecnica profesional en soporte de sistemas",
  "Técnica profesional contaduria publica",
  "Administracion de empresas",
  "Ingenieria agroforestal",
  "Ingenieria agronomica",
  "Ingeniera ambiental",
];

export const SALARY_PERIOD = ["Mensual", "Quincenal", "Anual", "Por proyecto"];

export const CONTRACT_TYPE = [
  "Contrato a término fijo",
  "Contrato por tiempo determinado",
  "Contrato a término indefinido",
  "Contrato por obra labor",
  "Contrato civil por prestación de servicio",
  "Contrato de aprendizaje",
  "Contrato ocasional de trabajo",
  "Contrato verbal",
  "Contrato escrito",
  "Contrato con determiando trabajadores",
];

export const EXPERIENCE_WORK = [
  "Sin experiencia",
  "Menos de un año",
  "Mas de un año",
  "Mas de tres años",
  "Mas de cinco años",
  "Mas de ocho años",
  "Mas de diez años",
];

export const COIN = ["COP-pesos", "USD-dolar", "EUR-euro"];

export const WrapperPostJob = styled.div`
  padding: 1em;

  .container--grid {
    margin-top: 5px;
    height: 75px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5em;
  }
`;
