import React from 'react'
import { HeaderTable, BodyTable } from '.'

export const Table = props => {
  return (
    <table>
      <HeaderTable />
      <BodyTable {...props} />
    </table>
  )
}
