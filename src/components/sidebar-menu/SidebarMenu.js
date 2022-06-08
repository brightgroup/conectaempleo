import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from 'store/actions/AuthActions'
import { getItems, WrapperSidebar } from '.'

export const SidebarMenu = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const [items, setItems] = useState([])
  const rol = user?.rol

  useEffect(() => setItems(getItems(rol === 'employer')), [rol])

  const logOutAction = section => {
    if (section === 'log-out') {
      dispatch(logOut())
    }
  }

  return (
    <WrapperSidebar className="sidebar d-flex flex-column align-items-start">
      {items.map((item, index) => (
        <Link key={index} to={item.path} className="sidebar-item d-flex align-items-center">
          <div key={item.text} className="d-flex align-items-center" onClick={() => logOutAction(item.section)}>
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
