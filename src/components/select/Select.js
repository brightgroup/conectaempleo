import React, { useEffect, useState } from "react";
// import { lowerCase } from "lodash";
import { Wrapper, WITHOUT_RESULTS } from ".";

export const SearchInput = ({
  options: optionList = [],
  message = "",
  name = "",
  label = "",
  setData = "",
}) => {
  const [list, setList] = useState(false);
  const [searchValue, setSearchValue] = useState(message);
  const [options, setOptions] = useState([]);

  useEffect(() => setOptions(optionList), [optionList]);

  const handleChangeOption = (option) => {
    const value = option;

    setSearchValue(value);
    setList(!list);
    setData((data) => ({ ...data, [name]: value }));
  };

  const toggleOptions = () => {
    setList(!list);
  };

  const handleChangeSearch = ({ target }) => {
    setList(true);
    setSearchValue(target.value);
    const options = optionList?.filter((option) =>
      option.toLowerCase().includes(target.value.toLowerCase())
    );
    setOptions(options?.length ? options : WITHOUT_RESULTS);
  };

  const onClickInput = () => {
    setList(!list);
    setSearchValue("");
  };

  return (
    <Wrapper>
      <label className="text-dark">{label}</label>
      <div className="select" onClick={toggleOptions}>
        <div className="select__option" onClick={() => setList(!list)}>
          <span>
            <i className="fa-solid fa-down icon--styles" />
          </span>
          <i class="fa-solid fa-left-long"></i>
        </div>
        <input
          type="text"
          onClick={onClickInput}
          value={searchValue}
          onChange={handleChangeSearch}
          className={`select__search-input ${
            searchValue === message ? "input-without-value" : ""
          }`}
        />
        {!!(options?.length && list) && (
          <div className="options select-search" id={name}>
            {options?.map((option, index) => (
              <div
                className="option flex items-center gap-1"
                key={index}
                onClick={() => handleChangeOption(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};
