import React from 'react'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Wrapper, Content } from '.'

const Transactions = () => {
  return (
    <Wrapper className="d-flex justify-content-center flex-column flex-xl-row">
      <SidebarMenu />
      <Content className="section-content">
        <PageTitle title="Transacciones" />
      </Content>
    </Wrapper>
  )
}

export default Transactions
