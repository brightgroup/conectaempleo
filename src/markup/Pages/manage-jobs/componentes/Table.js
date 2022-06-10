import React from 'react'

import { HeaderTable, BodyTable } from '.'

export const Table = ({ data = [], setOfferId = {} }) => {
  return (
    <table>
      <HeaderTable />
      <BodyTable data={data} setOfferId={setOfferId} />
    </table>
  )
}
