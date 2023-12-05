import { configure, makeAutoObservable } from "mobx";
import { ILogin, ISign } from "../../types/Auth";
import { AuthApi } from "../../api/AuthApi";

class AuthStore {
  message: string = "";
  token: string = localStorage.getItem("token") ?? "";
  error: boolean = false;

  constructor() {
    makeAutoObservable(this);
    configure({
      enforceActions: "never",
    });
  }

  signup = async (payload: ISign) => {
    try {
      if (payload.password !== payload.repeatPass)
      this.message = "Пароли не совпадают";
    else {
      const answer = await AuthApi.signup({
        login: payload.login,
        password: payload.password,
      });
      this.message = answer.message;
    }
    }
    catch {
      this.error = true;
      this.message = "На сервере произошла ошибка"
    }
  };

  login = async (payload: ILogin) => {
    const answer = await AuthApi.login(payload);
    if (answer.token) localStorage.setItem("token", JSON.stringify(answer.token));
    this.message = answer.message;
    this.token = answer.token;
  }

  logout = () => {
    localStorage.removeItem("token");
    this.message = "";
    this.token = "";
  }
}

export default new AuthStore();
