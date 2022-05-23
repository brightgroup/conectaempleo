import styled from "styled-components";

export const initialState = {
  email: "",
  password: "",
};

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  .container--login {
    @media (max-width: 768px) {
      width: 80%;
      background-color: red;
    }
  }
`;
