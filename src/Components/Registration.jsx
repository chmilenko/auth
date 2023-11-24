import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AuthReg.css";
import { registration } from "./authSlice";

function Registration({ setIsRegistrationModalOpened }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("http://kotomatrix.ru/show/850480/");
    }
  }, [navigate, user]);

  const register = (event) => {
    event.preventDefault();
    dispatch(registration({ email, password }));
  };

  const handleRegistration = () => {
    setIsRegistrationModalOpened(false);
  };
  return (
    <form className="form-add-product" onSubmit={register}>
      <div className="content">
        <div className="header">
          <img alt="icon" src="./logo.svg" />
          <h1 className="come-account">Зарегистрироваться</h1>
        </div>
        <div>
          <div className="form">
            <form>
              <div className="input-form">
                <p>Почта</p>
                <input
                  placeholder="Введите свою почту"
                  name="email"
                  type="text"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div className="input-form">
                <p>Придумайте пароль</p>
                <input
                  placeholder="Введите свой пароль"
                  name="password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
              <div className="input-form">
                <p>Подтвердите пароль</p>
                <input
                  placeholder="Введите свой пароль"
                  name="repeatPassword"
                  type="password"
                  onChange={(event) => setRepeatPassword(event.target.value)}
                  value={repeatPassword}
                />
              </div>
            </form>
            <div className="btn-form">
              <button className="btn-come" type="submit">
                Далее
              </button>
              <button className="yandex-id">
                <img src="./yandex.svg" alt="yandex" className="yandex-logo" />
                Яндекс ID
              </button>
            </div>
            <div className="moving">
              <span>Есть аккаунт?</span>
              <p className="go" onClick={handleRegistration}>
                Войти
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
