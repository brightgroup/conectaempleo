import React from 'react'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Table } from './componentes'
import { Wrapper, Content } from '.'

const ManageJobs = () => {
  return (
    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content table">
        <PageTitle title="Gestionar trabajos" />
        <Table />
      </Content>
    </Wrapper>
  )
}

export default ManageJobs
