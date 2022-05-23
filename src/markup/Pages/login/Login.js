import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { isEmail, isEmpty } from "../../../utils/validation";
import { initialState, Wrapper } from ".";
import { logIn } from "../../../store/actions/AuthActions";
import { LoginForm } from "./components";
import bnr from "../../../images/background/bg6.jpg";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState({ password: "", email: "" });

  const { email, password } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "" });
  };
  console.log(state);
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
      <div className="col-4 d-flex container--login flex-column align-items-center mt-4">
        <div className="logo-header text-center p-tb30 ">
          <Link to={"./"}>
            <img src={require("../../../images/logo.png")} alt="" />
          </Link>
        </div>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChangeInput={handleChangeInput}
          error={error}
          data={user}
        />
      </div>
      <div
        className="bg-img-fix col-8 "
        style={{ backgroundImage: `url(${bnr})`, height: "100vh" }}
      />
    </Wrapper>
  );
}

export default Login;
