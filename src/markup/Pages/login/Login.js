import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { isEmail, isEmpty } from "../../../utils/validation";
import { initialState, Wrapper } from ".";
import { logIn } from "../../../store/actions/AuthActions";
import { LoginForm } from "./components";
import bnr from "../../../images/background/bg6.jpg";
import logo from "../../../images/logo.png";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState({ password: "", email: "" });
  const { email, password, rol } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const changeRol = (rol) => {
    setUser({ ...user, rol });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      return setError({ ...error, input: "todos los campos son obligatorios" });
    }
    if (!isEmail(email)) {
      return setError({ ...error, email: "El e-mail no es valido" });
    }
    const loggedUser = await dispatch(logIn(user));
    if (loggedUser?.id) {
      history.push("/home");
    }
  };

  return (
    <Wrapper>
      <div className="d-flex container--login flex-column align-items-center mt-4">
        <div className="logo-header text-center p-tb30 ">
          <Link to={"./"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="d-flex justify-content-around mt-5">
          <button
            className={`rounded button--rol ${
              rol === "candidate" ? "active" : ""
            }`}
            onClick={() => changeRol("candidate")}
          >
            Candidato
          </button>
          <button
            className={`rounded ml-2 button--rol ${
              rol === "employer" ? "active" : ""
            }`}
            onClick={() => changeRol("employer")}
          >
            Empleador{" "}
          </button>
        </div>
        {rol && (
          <LoginForm
            handleSubmit={handleSubmit}
            handleChangeInput={handleChangeInput}
            error={error}
            data={user}
          />
        )}
      </div>
      <div
        className="bg-img-fix container--image"
        style={{ backgroundImage: `url(${bnr})`, height: "100vh" }}
      />
    </Wrapper>
  );
}

export default Login;