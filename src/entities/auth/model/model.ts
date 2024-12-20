export interface IAuthState {
    isLoggedIn: boolean;
    actionLoginUser: (username: string, password: string) => void;
}