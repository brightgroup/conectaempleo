import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import banner from 'images/main-slider/banner_work.jpg'
import { setFilter } from 'store/actions/JobOffersActions'
import { WrapperBanner } from '.'

export const Banner = ({ handleChangeData = () => {}, cities = [], homeUtils = [], filter = {} }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const filterJobs = () => {
    dispatch(setFilter(filter))
    history.push('/trabajos')
  }

  return (
    <WrapperBanner>
      <div
        className="banner__image d-flex justify-content-center align-items-center flex-wrap"
        style={{ backgroundImage: `url( ${banner})` }}
      >
        <div className="banner__form d-flex flex-column p-4">
          <div className="d-flex flex-wrap flex-sm-nowrap">
            <div className="banner__form-cont d-flex">
              <input
                placeholder="Titulo del trabajo"
                className="w-100 banner__form-input"
                name="title"
                onChange={handleChangeData}
                value={filter?.title}
              />
              <i className="fa fa-search banner__form-icon m-2" />
            </div>
            <div className="">
              <button className="banner__form-button" onClick={filterJobs}>
                Buscar trabajo
              </button>
            </div>
          </div>
          <div className="mt-2 d-flex">
            <div className="flex-1  px-2 mr-3">
              <select className="w-100 banner__form-select" name="functionalArea" onChange={handleChangeData}>
                <option>Area funcional</option>
                {homeUtils?.functionalArea?.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 d-flex gap-2">
              <select className="w-100 banner__form-select" name="department" onChange={handleChangeData}>
                <option>Departamento</option>
                {homeUtils?.departments?.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <select
                className="w-100 banner__form-select"
                name="city"
                onChange={handleChangeData}
                disabled={!filter.department}
              >
                <option>Area funcional</option>
                {cities?.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </WrapperBanner>
  )
}
