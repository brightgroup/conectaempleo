import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from 'components/check'
import { Input } from 'components/input'
import { Card } from './components'
import { JobModal } from './components/JobModal'
import { showjob, showJobs } from 'store/actions/JobOffersActions'
import { getFilteredJobutils } from 'store/actions/UtilActions'
import { getValue } from 'utils/array'
import { WrapperJobs } from '.'

const Jobs = () => {
  const dispatch = useDispatch()
  const { filteredJobUtils } = useSelector(state => state.utils)
  const { showJobs: jobs, showJob } = useSelector(state => state.jobOffer)

  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})

  const { jobExperiences, degreeLevel, jobTypes, salaryPeriods } = filteredJobUtils

  useEffect(() => {
    dispatch(getFilteredJobutils())
    dispatch(showJobs())
  }, [dispatch])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const viewDetails = data => {
    toggleModal()
    dispatch(showjob(data.slug))
    setModalData(showJob)
  }

  const getOptionValues = (data, key = 'job_experience_id') => {
    return Array.from(new Set(data.map(item => item[key])))
  }

  const getOptions = (options, utils) => {
    return options.map(item => getValue(item, utils))
  }

  const experiences = getOptions(getOptionValues(jobs), jobExperiences)
  const degreeLevels = getOptions(getOptionValues(jobs, 'degree_level_id'), degreeLevel)
  const jobType = getOptions(getOptionValues(jobs, 'job_type_id'), jobTypes)
  const salaryPeriod = getOptions(getOptionValues(jobs, 'salary_period_id'), salaryPeriods)

  return (
    <WrapperJobs>
      <div className="mb-4 d-flex justify-content-center">
        <Input placeholder="Buscar..." wrapperClassName="w-75" />
      </div>
      <div className="d-flex">
        <div className="filter border">
          <div className="m-3 filter__section">
            <p className="filter__title mt-2">Ofertas por titulo</p>
            {degreeLevels.map((item, index) => (
              <Checkbox label={item} key={index} />
            ))}
          </div>
          <div className="m-3 filter__section">
            <p className="filter__title mt-2">Ofertas por experiencia</p>
            {experiences.map((item, index) => (
              <Checkbox label={item} key={index} />
            ))}
          </div>
          <div className="m-3 filter__section">
            <p className="filter__title mt-2">Ofertas por tipo de contrato</p>
            {jobType.map((item, index) => (
              <Checkbox label={item} key={index} />
            ))}
          </div>
          <div className="m-3 filter__section">
            <p className="filter__title mt-2">Periodo salarial</p>
            {salaryPeriod.map((item, index) => (
              <Checkbox label={item} key={index} />
            ))}
          </div>
        </div>
        <div className="flex-1 d-flex justify-content-center flex-column align-items-center gap-2">
          {jobs?.map((job, index) => (
            <Card key={index} jobUtils={filteredJobUtils} viewDetails={viewDetails} data={job} />
          ))}
        </div>
      </div>
      <JobModal show={showModal} onClose={toggleModal} data={modalData} jobUtilsCard={filteredJobUtils} />
    </WrapperJobs>
  )
}

export default Jobs
