import React from 'react'
import { WrapperCheckbox } from '.'

export const Check = ({ label = '', name = '', handleChangeData = '', value = 0, wrapperClass = '', ...props }) => {
  return (
    <WrapperCheckbox className={wrapperClass}>
      <label className="text-dark">{label}</label>
      <div>
        <label className="mr-4">
          <input
            className="button-radio mx-1"
            type="radio"
            name={name}
            value="1"
            onChange={handleChangeData}
            {...props}
          />
          Si
        </label>
        <label>
          <input
            className="mx-1"
            type="radio"
            name={name}
            value="0"
            onChange={handleChangeData}
            defaultChecked
            {...props}
          />
          No
        </label>
      </div>
    </WrapperCheckbox>
  )
}
