import { MessageError } from 'components/message-error'
import React, { useEffect, useState } from 'react'
import { isEmpty } from 'utils/validation'
import { Wrapper, WITHOUT_RESULTS } from '.'

export const SelectSearch = ({
  options: optionList = [],
  message = '',
  name = '',
  label = '',
  setData = '',
  required = '',
  messageError = 'Este campo es obligatorio',
  disabled = false,
  wrapperClassName = '',
  ...props
}) => {
  const [list, setList] = useState(false)
  const [searchValue, setSearchValue] = useState(message)
  const [options, setOptions] = useState([])

  useEffect(() => setOptions(optionList), [optionList])

  const handleChangeOption = option => {
    const value = option.value
    const id = option.id
    if (!disabled) {
      setSearchValue(value)
      setList(!list)
      setData(data => ({ ...data, [name]: id }))
    }
  }

  const toggleOptions = () => {
    if (!disabled) {
      setList(!list)
    }
  }

  const handleChangeSearch = ({ target }) => {
    if (!disabled) {
      setList(true)
      setSearchValue(target.value)
      const options = optionList?.filter(option => option?.value.toLowerCase().includes(target.value.toLowerCase()))
      setOptions(options?.length ? options : WITHOUT_RESULTS)
    }
  }

  const onClickInput = () => {
    setList(!list)
    setSearchValue('')
  }

  return (
    <Wrapper disabled={disabled} className={{ wrapperClassName }}>
      <label className="text-dark">{label}</label>
      <div className="select" onClick={toggleOptions}>
        <div className="select__option" onClick={() => setList(!list)}>
          <span>
            <i className="fa-solid fa-angle-down icon--styles" />
          </span>
        </div>
        <input
          type="text"
          onClick={onClickInput}
          value={searchValue}
          onChange={handleChangeSearch}
          disabled={disabled}
          className={`select__search-input ${searchValue === message ? 'input-without-value' : ''}`}
        />
        {!!(options?.length && list) && (
          <div className="options select-search" id={name}>
            {options?.map((option, index) => (
              <div className="option flex items-center gap-1" key={index} onClick={() => handleChangeOption(option)}>
                {option.value || option}
              </div>
            ))}
          </div>
        )}
      </div>
      {required && isEmpty(props.value) && <MessageError error={messageError} />}
    </Wrapper>
  )
}
