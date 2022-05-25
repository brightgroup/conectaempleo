import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Wrapper } from ".";
import logo2 from "../../images/logo.png";

export const Header = () => {
  const { auth } = useSelector((state) => state);

  console.log(auth);

  return (
    <Wrapper>
      <div className="logo-header mostion">
        <Link to={"/"}>
          <img src={logo2} className="logo" alt="img" />
        </Link>
      </div>
      <nav className="d-flex align-items-end">
        <ul className="ul__list d-flex ">
          <li className="">
            <NavLink
              to={"/"}
              className="li_item text-dark"
              activeClassName="active"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="li_item text-dark"
              activeClassName="active"
            >
              Publicaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="li_item text-dark"
              activeClassName="active"
            >
              Trabajos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="li_item text-dark"
              activeClassName="active"
            >
              Empresas
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="li_item text-dark"
              activeClassName="active"
            >
              PQRS
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="d-flex align-items-center">
        <nav className="d-flex ">
          {auth?.user?.first_name}
          <Link to={"/login"} className="button" activeClassName="active">
            <i className="fa fa-user px-2"></i>
            Iniciar sesion
          </Link>

          <Link to={"/register"} className="button" activeClassName="active">
            Registrarte
          </Link>
        </nav>
      </div>
    </Wrapper>
  );
};
