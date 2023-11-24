import React, { useState } from "react";
import "./AuthReg.css";
import Checkbox from "@mui/material/Checkbox";

// import { useAppDispatch } from "../../store";
// import { selectLoginFormError } from "./selectors";
// import { useNavigate } from "react-router-dom";
// import { login, resetLoginErrorForm } from "./authSlice";
// import { useSelector } from "react-redux";

function Authenication({ setIsRegistrationModalOpened }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <form className="form-add-product">
      <div className="content">
        <div className="header">
          <img alt="icon" src="./logo.svg" />
          <h1 className="come-account">Войти в аккаунт</h1>
          <p className="welcome">Добро пожаловать! Введите свои данные</p>
        </div>
        <div>
          <div className="form">
            <form>
              <div className="input-form">
                <p>Почта</p>
                <input
                  placeholder="Введите свою почту"
                  name="email"
                  type="email"
                />
              </div>
              <div className="input-form">
                <p>Пароль</p>
                <input
                  placeholder="Введите свой пароль"
                  name="password"
                  type="password"
                />
              </div>
            </form>
            <div className="form-settings">
              <div className="remember-user">
                <Checkbox {...label} defaultChecked />{" "}
                <p style={{ margin: "-10px" }}>Запомнить меня</p>
              </div>
              <p>Забыли пароль?</p>
            </div>
            <div className="btn-form">
              <button className="btn-come">Войти</button>
              <button className="yandex-id">
                <img src="./yandex.svg" alt="yandex" className="yandex-logo" />
                Яндекс ID
              </button>
            </div>
            <div className="moving">
              <span>Нет аккаунта?</span>
              <p
                className="go"
                onClick={() => setIsRegistrationModalOpened(true)}
              >
                Зарегистрироваться
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Authenication;
