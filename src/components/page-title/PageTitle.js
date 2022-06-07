import React from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, paths } from '.'

export const PageTitle = ({ title = 'Publica un trabajo' }) => {
  const history = useHistory()

  const path = window.location.pathname.replace('/', '')

  return (
    <Wrapper className="d-flex justify-content-between">
      <h4 className="bold">{title}</h4>
      <div
        className="page-title__button text-center text-white d-flex align-items-center justify-content-center"
        onClick={() => history.push(paths[path] || 'resumen')}
      >
        Back
      </div>
    </Wrapper>
  )
}
