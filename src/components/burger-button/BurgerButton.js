import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { WrapperButton, NAVIGATION_ITEMS_MENU } from '.'

export const BurgerButton = () => {
  const history = useHistory()

  const [open, setOpen] = useState(false)

  const route = pathname => {
    history.push(pathname)
    setOpen(!open)
  }

  return (
    <WrapperButton className="d-flex flex-column burguer" open={open}>
      <div onClick={() => setOpen(!open)} className="pointer burger__button">
        <div className="burger__icon" />
        <div className="burger__icon" />
        <div className="burger__icon" />
      </div>
      <div className="burger__main">
        {NAVIGATION_ITEMS_MENU.map((item, index) => (
          <li
            key={index}
            className={`pointer burger__option ${item.className}`}
            onClick={() => route({ pathname: item.pathname })}
          >
            <i className={`px-3 mt-1 ${item.icon}`} />
            {item.label}
          </li>
        ))}
      </div>
    </WrapperButton>
  )
}
