import { ILogin, ILoginAnswer, ISignAnswer } from "../types/Auth";

export class AuthApi {

    static signup = async (payload: ILogin): Promise<ISignAnswer> => {
        const response = await fetch("http://localhost:3050/auth/signup", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            }
        }).then(res => res.json());
        return response;
    }

    static login = async (payload: ILogin): Promise<ILoginAnswer> => {
        const response = await fetch("http://localhost:3050/auth/login", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            }
        }).then(res => res.json());

        return response;
    }
}