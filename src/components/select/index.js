import styled from "styled-components";

export * from "./Select";

export const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  color: #9da5b1;

  .icon--styles {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 10px;
    top: 14px;
    border: 1px solid gray;
  }

  .disabled-select {
    background-color: rgb(214, 205, 205) !important;
    border: 1px solid transparent;
  }

  .select {
    width: 100%;
    height: 40px;
    position: relative;
    background-color: white;
    box-shadow: 2px 2px 5px #e5e2e1, -2px -2px 5px #e5e2e1;

    &__option {
      cursor: pointer;
      display: flex;
      border-radius: 3px;
    }

    &__search-input {
      position: absolute;
      top: 7px;
      left: 10px;
      width: 95%;
      border: none;
      background-color: transparent;
      outline: none;
    }

    .input-without-value {
      color: #9da5b1;
    }
  }

  .options {
    position: absolute;
    background-color: white;
    width: 100%;
    max-height: 10em;
    padding: 15px 0;
    margin-top: 15px;
    border-radius: 10px;
    border: 1px solid gray;
    overflow-y: scroll;
    z-index: 10;
  }

  .option {
    padding: 10px 15px;
    cursor: pointer;
  }

  .option:hover {
    background-color: whitesmoke;
  }
`;

export const WITHOUT_RESULTS = [{ id: 12, value: "No hay resultados" }];
