import React from 'react'
import { WrapperButton } from '.'

export const Button = ({ wrapperClass = '', onClick = () => {}, text = '', type = 'button' }) => {
  return (
    <WrapperButton className={wrapperClass} onClick={onClick} type={type}>
      {text}
    </WrapperButton>
  )
}
