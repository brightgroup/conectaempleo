import React from 'react'
import { WrapperFooter } from '.'
import logo2 from 'images/logo.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <WrapperFooter className="d-flex flex-column mt-4">
      <div className="footer__section d-flex">
        <div className="footer__column">
          <img src={logo2} width="180" className="mb-3" alt="logo" />
          <p className="footer__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard
            dummy text ever since the.
          </p>
          <div className="">
            <form className="" action="script/mailchamp.php" method="post">
              <div className="d-flex mt-3">
                <input
                  name="dzEmail"
                  required="required"
                  className="footer__input flex-1"
                  placeholder="Email"
                  type="email"
                />
                <span className="">
                  <button type="submit" className="footer__button">
                    Subscribe
                  </button>
                </span>
              </div>
            </form>
          </div>
          <ul className="footer__list d-flex mt-3">
            <li className="footer__social footer__icon-facebook">
              <Link
                to={''}
                className="footer__social-icon h-100 w-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-facebook-f" />
              </Link>
            </li>
            <li className="footer__social footer__icon-google">
              <Link
                to={''}
                className="footer__social-icon h-100 w-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-google-plus-g" />
              </Link>
            </li>
            <li className="footer__social footer__icon-linkedin">
              <Link
                to={''}
                className="footer__social-icon h-100 w-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-linkedin-in" />
              </Link>
            </li>
            <li className="footer__social footer__icon-instagram">
              <Link
                to={''}
                className="footer__social-icon h-100 w-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-instagram" />
              </Link>
            </li>
            <li className="footer__social footer__icon-twiter">
              <Link
                to={''}
                className="footer__social-icon h-100 w-100 d-flex justify-content-center align-items-center"
              >
                <i class="fa-brands fa-twitter" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__questions">
            <h5 className="footer__questions-title text-white ml-4 ">Preguntas Frecuentes</h5>
            <ul className="footer__questions-list mt-4">
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Privacidad y seguridad
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Terminos de servicio
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Comunicaciones
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Terminos de referencia
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Licencias de prestamo
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Soporte
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Como funciona
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Para empleadores
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Suscripcion
                </Link>
              </li>
              <li className="footer__questions-text">
                <Link to={''} className="footer__questions-item">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column-last">
          <div className=" footer__jobs">
            <h5 className="text-white ml-4">Encontrar Trabajo</h5>
            <ul className="mt-4 footer__questions-list">
              <li className="footer__jobs-text">
                <Link to={''} className="footer__questions-item">
                  Empleos en ee.uu
                </Link>
              </li>
              <li className="footer__jobs-text">
                <Link to={''} className="footer__questions-item">
                  Empleos en Canada
                </Link>
              </li>
              <li className="footer__jobs-text">
                <Link to={''} className="footer__questions-item">
                  Empleos Reino Unido
                </Link>
              </li>
              <li className="footer__jobs-text">
                <Link to={''} className="footer__questions-item">
                  Empleos en Francia
                </Link>
              </li>
              <li className="footer__jobs-text">
                <Link to={''} className="footer__questions-item">
                  Empleos en Suiza
                </Link>
              </li>
              <li className="footer__jobs-text">
                <Link to={''} className="footer__questions-item">
                  Empleos en China
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__rights">
        <div className="d-flex justify-content-center align-items-center w-full h-100">
          <span className="text-white">
            {' '}
            © Copyright by <i className="fa fa-heart m-lr5 text-red heart mx-2" style={{ color: 'red' }} />
            <Link to={''}>DexignZone </Link> Todos los derechos reservados.
          </span>
        </div>
      </div>
    </WrapperFooter>
  )
}
