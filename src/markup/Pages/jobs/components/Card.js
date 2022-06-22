import React from 'react'
import { getValue } from 'utils/array'
import { WrapperCard } from '.'

export const Card = ({ jobUtils, viewDetails, data }) => {
  const { title, company_id, description, job_type_id } = data

  return (
    <WrapperCard className="border">
      <div className="flex-1">
        <h4 className="card__title">{title}</h4>
        <p className="card__company">{getValue(company_id, jobUtils?.companies)}</p>
        <p className="card__description">{description}</p>
        <p className="card__job-type">{getValue(job_type_id, jobUtils?.jobTypes)}</p>
      </div>
      <div className="card__send d-flex justify-content-center align-items-center">
        <button className="card__button" onClick={() => viewDetails(data)}>
          VER DETALLES
        </button>
      </div>
    </WrapperCard>
  )
}
