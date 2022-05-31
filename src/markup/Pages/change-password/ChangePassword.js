import React from 'react'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Wrapper, Content } from '.'

const ChangePassword = () => {
  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Cambiar contraseña" />
      </Content>
    </Wrapper>
  )
}

export default ChangePassword
