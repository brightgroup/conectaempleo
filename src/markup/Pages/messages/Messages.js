import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Chat } from './components'
import { getProfile } from 'store/actions/UserActions'
import { getCompany } from 'store/actions/CompanyActions'
import { Wrapper, Content } from '.'

const Messages = () => {
  const dispatch = useDispatch()
  const {
    user: { profile },
    auth: { isCandidate },
    company: { company },
  } = useSelector(state => state)

  const [data, setData] = useState({})
  const ejecutar = false

  useEffect(() => {
    ejecutar && dispatch(isCandidate ? getProfile() : getCompany())
  }, [dispatch, isCandidate, ejecutar])

  useEffect(() => setData(profile), [profile, setData])

  useEffect(() => setData(company), [company, setData])

  return (
    <Wrapper className="d-flex justify-content-center px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Mensajes" />
        <Chat data={data} />
      </Content>
    </Wrapper>
  )
}

export default Messages
