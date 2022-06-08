import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from 'store/actions/AuthActions'
import { getItems, WrapperSidebar } from '.'

export const SidebarMenu = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const [items, setItems] = useState([])
  const [image, setImage] = useState('http://localhost:3000/static/media/icon3.c96722be.jpg')
  const rol = user?.rol

  useEffect(() => setItems(getItems(rol === 'employer')), [rol])

  const logOutAction = section => {
    if (section === 'log-out') {
      dispatch(logOut())
      localStorage.clear()
    }
  }

  const handleChangeImage = ({ target }) => {
    const image = target.files[0]
    setImage(URL.createObjectURL(image))
  }

  return (
    <WrapperSidebar className="sidebar d-flex flex-column align-items-start">
      <div className="sidebar__profile-box m-auto shadow d-flex justify-content-center relative">
        <div className="sidebar__container-image relative">
          <label className="sidebar__update-icon shadow" htmlFor="profileImage">
            <i className="fa-solid fa-pencil" />
            <input type="file" className="sidebar__input-file" id="profileImage" onChange={handleChangeImage} />
          </label>
          <img src={image} alt="profile" className="sidebar__profile-image w-100 h-100" />
          {/* <div className="sidebar__profile-image w-100 h-100"/> */}
        </div>
        <span className="sidebar__company-name">@Compañia</span>
      </div>
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
