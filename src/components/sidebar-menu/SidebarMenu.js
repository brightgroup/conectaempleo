import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from 'store/actions/AuthActions'
import { getItems, WrapperSidebar } from '.'

export const SidebarMenu = ({ rol = '' }) => {
  const dispatch = useDispatch()
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(rol === 'employer'))
  }, [rol])

  return (
    <WrapperSidebar className="d-flex flex-column align-items-start">
      <div className="container__image bg-black-50 text-center my-3">image</div>
      {items.map(item => (
        <Link to={item.path} className="sidebar-item d-flex align-items-center">
          <div
            key={item.text}
            className="d-flex align-items-center"
            onClick={() => {
              if (item.path !== '/login') dispatch(logOut())
              localStorage.clear()
            }}
          >
            <div className="d-flex">
              <i className={`${item.icon} pl-2 pr-2`} />
            </div>
            <span className="sidebar-item__label">{item.text}</span>
          </div>
        </Link>
      ))}
    </WrapperSidebar>
  )
}
