import styled from 'styled-components'

export { default } from './PostJob'

export const Wrapper = styled.div`
  gap: 30px;
  padding: 40px 0;
`

export const Content = styled.div`
  .post-job {
    &__inputs-container {
      gap: 30px;
    }
  }

  .container--grid {
    margin-top: 5px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5em;
  }

  .form__buton--style {
    padding: 6px 22px;
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    outline: none;

    &:hover {
      color: black;
      box-shadow: 2px 2px 5px #e5e2e1, -2px -2px 5px #e5e2e1;
    }
  }
`

export const initialState = {
  title: '',
  description: '',
  benefits: '',
  skills: [],
  country_id: '',
  state_id: '',
  city_id: '',
  salary_from: '',
  salary_to: '',
  salary_currency: '',
  salary_period_id: '',
  hide_salary: '0',
  functional_area_id: '',
  job_type_id: '',
  num_of_positions: '',
  expiry_date: '',
  degree_level_id: '',
  job_experience_id: '',
  is_freelance: '0',
  is_featured: true,
  is_active: true,
  company_id: '231',
}
