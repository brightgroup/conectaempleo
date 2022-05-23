import Wrapper from ".";
import React from "react";

export const ButtonLinkIcon = ({ toggleModal = "" }) => {
  return (
    <Wrapper>
      <i className="far fa-user-circle text-green" />
      <span className="text-white font-semibold" onClick={toggleModal}>
        Iniciar sesión
      </span>
    </Wrapper>
  );
};
