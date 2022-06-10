import React from 'react'

import { HeaderTable, BodyTable } from '.'

export const Table = ({ data = [], setIdOffer = {} }) => {
  return (
    <table>
      <HeaderTable />
      <BodyTable data={data} setIdOffer={setIdOffer} />
    </table>
  )
}
