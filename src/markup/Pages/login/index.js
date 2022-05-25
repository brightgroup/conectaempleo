import styled from "styled-components";

export const initialState = {
  email: "",
  password: "",
  rol: "",
};

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;

  .container--login {
    flex-basis: 400px;
    flex-grow: 0;

    @media (max-width: 768px) {
      width: 80%;
      background-color: red;
    }
  }

  .button--rol {
    padding: 6px 12px;
    cursor: pointer;
    border: none;
    outline: none;
    font-weight: 600;
  }

  .active {
    background: #0097fe;
    color: white;
    box-shadow: 2px 2px 2px gray;
  }

  .container--image {
    flex-grow: 1;
  }
`;
