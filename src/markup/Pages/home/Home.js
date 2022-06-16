import IndexBanner from 'markup/Element/IndexBanner'
import React from 'react'
import banner from 'images/main-slider/banner_work.jpg'
import { WrapperHome } from '.'

const Home = () => {
  return (
    <WrapperHome className="home">
      <div
        className="home__image d-flex justify-content-center align-items-center flex-wrap"
        style={{ backgroundImage: 'url(' + banner + ')' }}
      >
        <div className="home__form d-flex flex-column p-4">
          <div className="d-flex flex-wrap flex-lg-nowrap home__form-row">
            <div className="home__form-cont home__">
              <input placeholder="Titulo del trabajo" className="w-100 home__form-input" name="title" />
              <i className="fa fa-search home__form-icon" />
            </div>
            <div className="">
              <button className="home__form-button">Buscar trabajo</button>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-lg-nowrap home__form-row ">
            <div className="col-lg-5 home__form-cont ">
              <select className="w-100 home__form-select ">
                <option>Area funcional</option>
                <option>Construction</option>
                <option>Corodinator</option>
                <option>Employer</option>
                <option>Financial Career</option>
                <option>Information Technology</option>
                <option>Marketing</option>
                <option>Quality check</option>
                <option>Real Estate</option>
                <option>Sales</option>
                <option>Supporting</option>
                <option>Teaching</option>
              </select>
            </div>
            <div className="col-lg-3 home__form-cont">
              <select className="w-100 home__form-select">
                <option>Departamento</option>
                <option>Construction</option>
                <option>Corodinator</option>
                <option>Employer</option>
                <option>Financial Career</option>
                <option>Information Technology</option>
                <option>Marketing</option>
                <option>Quality check</option>
                <option>Real Estate</option>
                <option>Sales</option>
                <option>Supporting</option>
                <option>Teaching</option>
              </select>
            </div>
            <div className="col-lg-3 home__form-cont">
              <select className="w-100 home__form-select">
                <option>Ciudad</option>
                <option>Construction</option>
                <option>Corodinator</option>
                <option>Employer</option>
                <option>Financial Career</option>
                <option>Information Technology</option>
                <option>Marketing</option>
                <option>Quality check</option>
                <option>Real Estate</option>
                <option>Sales</option>
                <option>Supporting</option>
                <option>Teaching</option>
              </select>
            </div>
          </div>
          <div className="border d-flex">
            <div className="flex-1">
              <select className="w-100 home__form-select ">
                <option>Area funcional</option>
                <option>Construction</option>
                <option>Corodinator</option>
                <option>Employer</option>
                <option>Financial Career</option>
                <option>Information Technology</option>
                <option>Marketing</option>
                <option>Quality check</option>
                <option>Real Estate</option>
                <option>Sales</option>
                <option>Supporting</option>
                <option>Teaching</option>
              </select>
            </div>
            <div className="flex-1 d-flex gap-2">
            <select className="w-100 home__form-select ">
                <option>Area funcional</option>
                <option>Construction</option>
                <option>Corodinator</option>
                <option>Employer</option>
                <option>Financial Career</option>
                <option>Information Technology</option>
                <option>Marketing</option>
                <option>Quality check</option>
                <option>Real Estate</option>
                <option>Sales</option>
                <option>Supporting</option>
                <option>Teaching</option>
              </select>
              <select className="w-100 home__form-select ">
                <option>Area funcional</option>
                <option>Construction</option>
                <option>Corodinator</option>
                <option>Employer</option>
                <option>Financial Career</option>
                <option>Information Technology</option>
                <option>Marketing</option>
                <option>Quality check</option>
                <option>Real Estate</option>
                <option>Sales</option>
                <option>Supporting</option>
                <option>Teaching</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </WrapperHome>
  )
}
export default Home
