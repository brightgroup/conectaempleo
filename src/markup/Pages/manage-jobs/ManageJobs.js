import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { swal } from 'utils/swal'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Table } from './componentes'
import { deleteJobOffer, getJobs } from 'store/actions/JobOffersActions'
import { Wrapper, Content } from '.'

const ManageJobs = () => {
  const dispatch = useDispatch()
  const { jobsOffers } = useSelector(state => state.jobOffer)
  const [data, setData] = useState([])
  const [offerId, setOfferId] = useState({ id: '' })

  const deleteOffer = useCallback(async () => {
    const isCorrectStatus = dispatch(deleteJobOffer(offerId))
    if (isCorrectStatus) Swal.fire(swal('Vacante eliminada'))
  }, [dispatch, offerId])

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  useEffect(() => {
    setData(jobsOffers.data)
  }, [jobsOffers])

  useEffect(() => {
    deleteOffer()
  }, [deleteOffer])

  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content table">
        <PageTitle title="Gestionar trabajos" />
        <Table data={data} setOfferId={setOfferId} />
      </Content>
    </Wrapper>
  )
}

export default ManageJobs
