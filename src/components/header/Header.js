import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import logo2 from 'images/logo.png'
import { EMPLOYER } from 'constants/rol'
import { Wrapper } from '.'

export const Header = () => {
  const {
    auth: { user },
  } = useSelector(state => state)

  return (
    <Wrapper>
      <div className="logo-header mostion">
        <Link to={'/'}>
          <img src={logo2} className="logo" alt="img" />
        </Link>
      </div>
      <nav className="d-flex align-items-end">
        <ul className="ul__list d-flex ">
          <li className="">
            <NavLink to={'/'} className="li_item text-dark">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} className="li_item text-dark">
              Publicaciones
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} className="li_item text-dark">
              Trabajos
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} className="li_item text-dark">
              Empresas
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} className="li_item text-dark">
              Empresas
            </NavLink>
          </li>
          {user?.rol === EMPLOYER && (
            <li>
              <NavLink to="/publicar-empleo" className="li_item text-dark">
                Publicar empleo
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="d-flex align-items-center">
        <nav className="d-flex ">
          {user?.first_name}
          <Link to={'/login'} className="button">
            <i className="fa fa-user px-2"></i>
            Iniciar sesion
          </Link>

          <Link to={'/register'} className="button">
            Registrarte
          </Link>
        </nav>
      </div>
    </Wrapper>
  )
}
