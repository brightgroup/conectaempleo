import React from 'react'
import { HeaderTable, BodyTable } from '.'

export const Table = props => {
  return (
    <table>
      <HeaderTable {...props} />
      <BodyTable {...props} />
    </table>
  )
}
