import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Table } from './componentes'
import { deleteJobOffer, getJobs } from 'store/actions/JobOffersActions'
import { Wrapper, Content } from '.'

const ManageJobs = () => {
  const dispatch = useDispatch()
  const { jobsOffers } = useSelector(state => state.jobOffer)
  const [data, setData] = useState([])
  const [idOffer, setIdOffer] = useState({ id: '' })

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  useEffect(() => {
    setData(jobsOffers.data)
  }, [jobsOffers])

  useEffect(() => {
    deleteOffer()
  }, [idOffer])

  const deleteOffer = () => {
    dispatch(deleteJobOffer(idOffer))
  }

  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content table">
        <PageTitle title="Gestionar trabajos" />
        <Table data={data} setIdOffer={setIdOffer} />
      </Content>
    </Wrapper>
  )
}

export default ManageJobs
