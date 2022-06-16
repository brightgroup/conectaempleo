import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import useModal from 'hooks/useModal'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { OfferModal, Table, ReadingModal } from './componentes'
import { deleteJobOffer, getJobs, updateOffer, setOffer } from 'store/actions/JobOffersActions'
import { swal } from 'utils/swal'
import { isEmpty } from 'utils/validation'
import { Content, modalName, modalInitialState, Wrapper } from '.'

const ManageJobs = () => {
  const dispatch = useDispatch()
  const { jobOffers, currentOffer: offer } = useSelector(state => state.jobOffer)
  const { toggleModal, modals } = useModal(modalInitialState)

  const [data, setData] = useState([])
  const [offerRead, setOfferRead] = useState({})
  const [currentOffer, setCurrentOffer] = useState({})
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    setCurrentOffer(offer)
  }, [offer])

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  useEffect(() => {
    setData(jobOffers?.data)
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
    toggleModal(modalName.update)
    setValidate(false)
    dispatch(setOffer({}))
  }

  const readOffer = offer => {
    toggleModal(modalName.read)
    if (offer) setOfferRead(offer)
  }

  const deleteOffer = async offerId => {
    const isCorrectStatus = await dispatch(deleteJobOffer(offerId))
    if (isCorrectStatus) Swal.fire(swal('Vacante eliminada'))
  }

  return (
    <Wrapper className="d-flex justify-content-center flex-column flex-xl-row">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Gestionar trabajos" />
        <Table
          data={data}
          toggleModal={toggleModal}
          readOffer={readOffer}
          deleteOffer={deleteOffer}
          setData={setData}
          jobOffers={jobOffers?.data}
        />
      </Content>
      <OfferModal
        show={modals.update}
        onClose={toggleModal}
        setCurrentOffer={setCurrentOffer}
        handleSubmit={handleSubmit}
        currentOffer={currentOffer}
        validate={validate}
      />
      <ReadingModal show={modals.read} data={offerRead} readOffer={readOffer} />
    </Wrapper>
  )
}

export default ManageJobs
