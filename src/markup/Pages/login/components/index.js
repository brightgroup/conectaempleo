import styled, { keyframes } from "styled-components";

export * from "./LoginForm";

const animateStart = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }
    100%{
        opacity:1;
    }
`;

export const WrapperForm = styled.form`
  width: 80%;
  animation: ${animateStart} 1s ease;
`;
