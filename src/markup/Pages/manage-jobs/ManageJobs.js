import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { OfferModal, Table } from './componentes'
import { deleteJobOffer, getJobs, updateOffer, setOffer } from 'store/actions/JobOffersActions'
import { swal } from 'utils/swal'
import { isEmpty } from 'utils/validation'
import { Content, Wrapper } from '.'

const ManageJobs = () => {
  const dispatch = useDispatch()

  const { jobOffers, currentOffer: offer } = useSelector(state => state.jobOffer)
  const [data, setData] = useState([])
  const [modalView, setModalView] = useState(false)
  const [currentOffer, setCurrentOffer] = useState({})
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    setCurrentOffer(offer)
  }, [offer])

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  useEffect(() => {
    setData(jobOffers.data)
  }, [jobOffers])

  const hasEmptyFields = () => {
    const fields = Object.keys(currentOffer)
    return fields?.some(field => isEmpty(currentOffer[field]))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setValidate(true)
    if (hasEmptyFields()) return
    const isCorrectStatus = await dispatch(
      updateOffer({ ...currentOffer, skills: [currentOffer.skills] }, currentOffer.id)
    )
    if (isCorrectStatus) Swal.fire(swal('vacante actualizada correctamente'))
    toggleModal()
    setValidate(false)
    dispatch(setOffer({}))
  }

  const toggleModal = () => {
    setModalView(!modalView)
  }

  const deleteOffer = async offerId => {
    const isCorrectStatus = await dispatch(deleteJobOffer(offerId))
    if (isCorrectStatus) Swal.fire(swal('Vacante eliminada'))
  }

  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content table">
        <PageTitle title="Gestionar trabajos" />
        <Table
          data={data}
          toggleModal={toggleModal}
          deleteOffer={deleteOffer}
          setData={setData}
          jobOffers={jobOffers?.data}
        />
      </Content>
      <OfferModal
        show={modalView}
        onClose={toggleModal}
        setCurrentOffer={setCurrentOffer}
        handleSubmit={handleSubmit}
        currentOffer={currentOffer}
        validate={validate}
      />
    </Wrapper>
  )
}

export default ManageJobs
