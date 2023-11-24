import React, { useState } from "react";
import "./AuthReg.css";
// import { useAppDispatch } from "../../store";
// import { selectLoginFormError } from "./selectors";
// import { useNavigate } from "react-router-dom";
// import { login, resetLoginErrorForm } from "./authSlice";
// import { useSelector } from "react-redux";

function Registration({setIsRegistrationModalOpened}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegistration = () => {
    setIsRegistrationModalOpened(false);
  };
  return (
    <form className="form-add-product">
      <div className="content">
        <div className="header">
          <img alt="icon" src="./logo.svg" />
          <h1 className="come-account">Зарегистрироваться</h1>
        </div>
        <div>
          <div className="form">
            <form>
              <div  className="input-form">
                <p>Почта</p>
                <input
                  placeholder="Введите свою почту"
                  name="email"
                  type="email"
                />
              </div>
              <div  className="input-form">
                <p>Придумайте пароль</p>
                <input
                  placeholder="Введите свой пароль"
                  name="password"
                  type="password"
                />
              </div>
              <div  className="input-form">
                <p>Подтвердите пароль</p>
                <input
                  placeholder="Введите свой пароль"
                  name="repeatPassword"
                  type="password"
                />
              </div>
            </form>
            <div className="btn-form">
              <button className="btn-come">Далее</button>
              <button className="yandex-id"><img src="./yandex.svg" alt="yandex" className="yandex-logo" />Яндекс ID</button>
            </div>
            <div className="moving">
              <span>Есть аккаунт?</span>
              <p className="go" onClick={handleRegistration}>Войти</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
