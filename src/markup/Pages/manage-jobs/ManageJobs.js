import React from 'react'
import { SidebarMenu } from 'components/sidebar-menu'
import { PageTitle } from 'components/page-title'
import { Wrapper, Content } from '.'
import { Link } from 'react-router-dom'
import { Table } from './componentes'


const ManageJobs = () => {
  console.log("entra en")
  return (

    <Wrapper className="d-flex justify-content-center h-full px-4">
      <SidebarMenu />
      <Content className="section-content table">
        <PageTitle title="Gestionar trabajos" />
            <Table/>   
      </Content>
    </Wrapper>
  )
}

export default ManageJobs
