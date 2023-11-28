import React, { useState, useEffect } from "react";
import "./AuthReg.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "../Hooks/setCookie";

function Authenication({ setIsRegistrationModalOpened }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = getTokenFromCookie();
  useEffect(() => {
    if (token) {
      navigate("http://kotomatrix.ru/show/850480/");
    }
  }, [navigate, token]);

  const authorization = (event) => {
    event.preventDefault();
    dispatch(authorization({ mail, password }));
  };

  return (
    <form className="form-add-product" onSubmit={authorization}>
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
                <p className="label">Почта</p>
                <input
                  placeholder="Введите свою почту"
                  name="mail"
                  type="mail"
                  value={mail}
                  onChange={(event) => setMail(event.target.value)}
                />
              </div>
              <div className="input-form">
                <p className="label">Пароль</p>
                <input
                  placeholder="Введите свой пароль"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </form>
            <div className="form-settings">
              <div className="remember-user">
                <Checkbox {...label} defaultChecked />{" "}
                <p style={{ margin: "-10px" }}>Запомнить меня</p>
              </div>
              <p className="forgot-password">Забыли пароль?</p>
            </div>
            <div className="btn-form">
              <button className="btn-come" type="submit">
                Войти
              </button>
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
