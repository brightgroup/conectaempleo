import React from 'react'
import { HeaderTable, BodyTable } from '.'

export const Table = props => {
  return (
    <div className="manage-jobs__table">
      <table>
        <HeaderTable {...props} />
        <BodyTable {...props} />
      </table>
    </div>
  )
}
