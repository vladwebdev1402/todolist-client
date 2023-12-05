import React, { useState } from "react";
import st from "./LoginPage.module.scss";
import InputForm from "../../ui/input/InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import AuthStore from "../../store/AuthStore/AuthStore";
import { ILogin } from "../../types/Auth";
import Button from "../../ui/button/Button/Button";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
const LoginPage = observer(() => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<ILogin>({
    login: "",
    password: "",
  });

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, login: e.target.value });
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: e.target.value });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await AuthStore.login(login);
    if (AuthStore.token) navigate("/");
  };

  return (
    <div className={st.login}>
      <div className={st.login__head}>Авторизация</div>
      <form className={st.login__body} onSubmit={submit}>
        <InputForm
          placeholder="Логин"
          value={login.login}
          onChange={changeLogin}
          className={st.login__input}
        />
        <InputForm
          placeholder="Пароль"
          type="password"
          value={login.password}
          onChange={changePassword}
          className={st.login__input}
        />

        <Button>Авторизироваться</Button>
      </form>
      <div className={st.login__to_sign}>
        Не зарегестрированы? <Link to="/sign">Регистрация</Link>
      </div>
      <div className={st.message}>{AuthStore.message}</div>
    </div>
  );
});

export default LoginPage;
