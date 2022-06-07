import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { MessageError } from 'components/message-error'
import { isEmpty } from 'utils/validation'
import { Wrapper, WITHOUT_RESULTS } from '.'

export const SelectSearch = ({
  options: optionList = [],
  message = 'Seleccione...',
  name = '',
  label = '',
  setData = '',
  required = false,
  messageError = 'Este campo es obligatorio',
  disabled = false,
  activatedSelect = '',
  setActivatedSelect = () => {},
  wrapperClassName = '',
  initialValue = '',
}) => {
  const [searchValue, setSearchValue] = useState(message)
  const [options, setOptions] = useState([])

  const isActivated = useMemo(() => activatedSelect === name, [activatedSelect, name])

  const getvalue = useCallback(
    () => (initialValue ? optionList?.find(option => option.id === Number(initialValue))?.name || '' : ''),
    [initialValue, optionList]
  )

  useEffect(() => setOptions(optionList), [optionList])

  useEffect(() => setSearchValue(getvalue()), [initialValue, getvalue])

  const handleChangeOption = option => {
    const [value, id] = [option.name, option.id]
    if (!disabled && value) {
      setSearchValue(value)
      setData(data => ({ ...data, [name]: id || value, ...(name === 'state_id' && { city_id: '' }) }))
    }
  }

  const toggleOptions = () => {
    if (!disabled) setActivatedSelect(isActivated ? '' : name)
  }

  const handleChangeSearch = ({ target }) => {
    const value = target.value
    if (!disabled) {
      setActivatedSelect(name)
      setSearchValue(value)
      const options = optionList?.filter(option => option?.name?.toLowerCase()?.includes(value?.toLowerCase()))
      setOptions(!value ? options : options?.length ? options : WITHOUT_RESULTS)
    }
  }

  const onClickInput = () => setActivatedSelect(name)

  const hasError = required && isEmpty(searchValue)

  return (
    <Wrapper disabled={disabled} className={wrapperClassName} hasError={hasError}>
      <label className="select__label">{label}</label>
      <div className="select" onClick={toggleOptions}>
        <div className="select__option" onClick={toggleOptions}>
          <span>
            <i className={`fa-solid fa-angle-down pointer ${isActivated ? 'flip-arrow' : ''}  select__arrow`} />
          </span>
        </div>
        <input
          type="text"
          onClick={onClickInput}
          value={searchValue}
          onChange={handleChangeSearch}
          disabled={disabled}
          className={`select__search-input ${searchValue === message ? 'input-without-value' : ''}`}
          placeholder={message}
        />
        {!!(options?.length && isActivated) && (
          <div className="options select-search" id={name}>
            {options?.map((option, index) => (
              <div className="option flex items-center gap-1" key={index} onClick={() => handleChangeOption(option)}>
                {option.name || option.value}
              </div>
            ))}
          </div>
        )}
      </div>
      {hasError && <MessageError error={messageError} />}
    </Wrapper>
  )
}
