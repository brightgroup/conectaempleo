import React from 'react'
import { Wrapper } from '.'

export const Loader = ({ message, ...props }) => {
  return (
    <Wrapper message={message} {...props}>
      <div className="loading__spinner" />
      {message && <p>{message}</p>}
    </Wrapper>
  )
}
