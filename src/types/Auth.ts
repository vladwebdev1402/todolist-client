export interface ISign{
    login: string;
    password: string;
    repeatPass: string;
}

export interface ILogin{
    login: string;
    password: string;
}

export interface ISignAnswer {
    message: string;
}

export interface ILoginAnswer {
    message: string;
    token: string;
}
