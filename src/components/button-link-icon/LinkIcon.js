import React from "react";
import { Link } from "react-router-dom";
import Wrapper from ".";

export const ButtonLinkIcon = ({ toggleModal = "" }) => {
  return (
    <Wrapper>
      <Link
        to={""}
        className="fa fa-facebook  fb-btn mr-1"
        target="bank"
      ></Link>
    </Wrapper>
  );
};
