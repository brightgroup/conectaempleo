import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import logo2 from 'images/logo.png'
import { EMPLOYER } from 'constants/rol'
import { Wrapper } from '.'
// import { BurgerButton } from 'components/burger-button'

export const Header = () => {
  const {
    auth: { user },
  } = useSelector(state => state)

  return (
    <Wrapper>
      <div className="header__logo d-flex align-items-center">
        <Link to="/"><img src={logo2} className="header__logo-size" alt="img" /></Link>
      </div>
      <nav className="header__nav d-flex align-items-center ">
        <ul className="header__nav-list d-flex m-0">
          <li>
            <NavLink to="/" className="header__nav-option text-dark">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="header__nav-option text-dark">
              Publicaciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/trabajos" className="header__nav-option text-dark">
              Trabajos
            </NavLink>
          </li>
          <li>
            <NavLink to="/empresas" className="header__nav-option text-dark">
              Empresas
            </NavLink>
          </li>
          <li>
            <NavLink
              to={user?.rol === EMPLOYER ? '/publicar-empleo' : '/perfil'}
              className="header__nav-option text-dark"
            >
              {user?.rol === EMPLOYER ? 'Publicar empleo' : 'Perfil'}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="d-flex align-items-center header__login">
        <nav className="d-flex mr-4 header__login-nav">
          <Link to="/iniciar-sesion" className="header__login-option">
            <i className="fa fa-user px-2"></i>
            Iniciar sesion
          </Link>

          <Link to="/registro" className="header__login-option">
            Registrarte
          </Link>
        </nav>
        {/* <BurgerButton /> */}
      </div>
    </Wrapper>
  )
}
