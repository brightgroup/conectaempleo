import React from 'react'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { UserForm } from './components'
import { Wrapper, Content } from '.'

const CompanyProfile = () => {
  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Perfil compañia" />
        <UserForm />
      </Content>
    </Wrapper>
  )
}

export default CompanyProfile
