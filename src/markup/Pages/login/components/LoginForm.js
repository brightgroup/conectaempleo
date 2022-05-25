import React from "react";
import { Link } from "react-router-dom";
import { WrapperForm } from ".";

export const LoginForm = ({ handleSubmit, handleChangeInput, error, data }) => {
  return (
    <WrapperForm
      className="d-flex flex-column align-items-center"
      onSubmit={handleSubmit}
    >
      <h3 className="pt-4 mt-4">
        Información {data.rol === "candidate" ? "Candidato" : "Empleador"}
      </h3>
      <input
        className="form-control rounded mt-2"
        placeholder="hello@example.com"
        name="email"
        value={data.email}
        onChange={handleChangeInput}
      />
      {error && <p>{error.email}</p>}
      <input
        type="password"
        className="form-control border mt-3"
        placeholder="password"
        name="password"
        value={data.password}
        onChange={handleChangeInput}
      />
      {error && <p>{error.input}</p>}
      <button type="submit" className="site-button dz-xs-flex my-4 ">
        INICIAR SESIÓN
      </button>
      <div className="dz-social clearfix mt-3 d-flex justify-content-between w-100">
        <h5 className="form-title m-t5 pull-left">Ingresa con </h5>
        <ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white m-s2">
          <li>
            <Link
              to={""}
              className="fa fa-facebook  fb-btn mr-1"
              target="bank"
            ></Link>
          </li>
          <li>
            <Link
              to={""}
              className="fa fa-twitter  tw-btn mr-1"
              target="bank"
            ></Link>
          </li>
          <li>
            <Link
              to={""}
              className="fa fa-linkedin link-btn mr-1"
              target="bank"
            ></Link>
          </li>
          <li>
            <Link
              to={""}
              className="fa fa-google-plus gplus-btn"
              target="bank"
            ></Link>
          </li>
        </ul>
      </div>
    </WrapperForm>
  );
};
