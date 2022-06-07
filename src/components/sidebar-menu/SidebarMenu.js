import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from 'store/actions/AuthActions'
import { getItems, WrapperSidebar } from '.'

export const SidebarMenu = ({ rol = '' }) => {
  const dispatch = useDispatch()
  const [items, setItems] = useState([])
  const [image, setImage] = useState('http://localhost:3000/static/media/icon3.c96722be.jpg')

  useEffect(() => {
    setItems(getItems(rol === 'employer'))
  }, [rol])

  const logOutAction = section => {
    if (section === 'log-out') {
      dispatch(logOut())
      localStorage.clear()
    }
  }

  // const createImage = (image: any) => {
  //   return typeof image === STRING || !image ? image : URL.createObjectURL(image)
  // }

  const handleChangeImage = ({ target }) => {
    const image = target.files[0]
    console.log('imagen', URL.createObjectURL(image))
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
