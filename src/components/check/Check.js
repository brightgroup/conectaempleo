import React from 'react'
import { WrapperCheckbox } from '.'

export const Check = ({ label = '', name = '', handleChangeData = '', value = '', ...props }) => {
  return (
    <WrapperCheckbox>
      <label className="text-dark">{label}</label>
      <div>
        <label className="mx-4">
          <input
            className="button-radio px-2 mx-1"
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
            className=" mx-1"
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
