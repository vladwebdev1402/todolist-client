import React, { useState } from "react";
import st from "./SignUpPage.module.scss";
import InputForm from "../../ui/input/InputForm/InputForm";
import Button from "../../ui/button/Button/Button";
import { ISign } from "../../types/Auth";
import { observer } from "mobx-react-lite";
import AuthStore from "../../store/AuthStore/AuthStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUpPage = observer(() => {
  const navigate = useNavigate();
  const [sign, setSign] = useState<ISign>({
    login: "",
    password: "",
    repeatPass: "",
  });

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({ ...sign, login: e.target.value });
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({ ...sign, password: e.target.value });
  };

  const changeRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({ ...sign, repeatPass: e.target.value });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await AuthStore.signup(sign);
    if (AuthStore.message == "Пользователь успешно зарегестрирован")
      navigate("/");
  };

  return (
    <div className={st.sign}>
      <div className={st.sign__head}>Регистрация</div>
      <form className={st.sign__body} onSubmit={submit}>
        <InputForm
          placeholder="Логин"
          value={sign.login}
          onChange={changeLogin}
          className={st.sign__input}
        />
        <InputForm
          placeholder="Пароль"
          type="password"
          value={sign.password}
          onChange={changePassword}
          className={st.sign__input}
        />
        <InputForm
          placeholder="Повторите пароль"
          type="password"
          value={sign.repeatPass}
          onChange={changeRepeatPassword}
          className={st.sign__input}
        />
        <Button>Зарегистрироваться</Button>
      </form>
      <div className={st.sign__to_login}>
        Зарегестрированы? <Link to="/">Автозироваться</Link>
      </div>
      <div className={st.message}>{AuthStore.message}</div>
    </div>
  );
});

export default SignUpPage;
