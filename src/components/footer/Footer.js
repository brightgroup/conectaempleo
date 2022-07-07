import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from 'images/logo.png'
import { jobs, questions, socialNetworks, WrapperFooter } from '.'

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
          <div>
            <form action="script/mailchamp.php" method="post">
              <div className="d-flex mt-3">
                <input
                  name="dzEmail"
                  required="required"
                  className="footer__input flex-1"
                  placeholder="Email"
                  type="email"
                />
                <span>
                  <button type="submit" className="footer__button">
                    Subscribe
                  </button>
                </span>
              </div>
            </form>
          </div>
          <ul className="footer__list d-flex mt-3">
            {socialNetworks.map(item => (
              <li className={`footer__social ${item.class}`} key={item.name}>
                <Link
                  to={''}
                  className="footer__social-icon h-100 w-100 d-flex justify-content-center align-items-center"
                >
                  <i className={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__questions">
            <h5 className="footer__questions-title text-white ml-4">Preguntas Frecuentes</h5>
            <ul className="footer__questions-list mt-4">
              {questions.map((item, index) => (
                <li className="footer__questions-text" key={index}>
                  <Link to={''} className="footer__questions-item">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__column-last">
          <div className=" footer__jobs">
            <h5 className="text-white ml-4">Encontrar Trabajo</h5>
            <ul className="mt-4 footer__questions-list">
              {jobs.map((item, index) => (
                <li className="footer__jobs-text" key={index}>
                  <Link to={''} className="footer__questions-item">
                    {item}
                  </Link>
                </li>
              ))}
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
