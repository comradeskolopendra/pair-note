import {create} from "zustand";
import type {IAuthState} from "./model/model";
import {loginUser} from "@/entities/auth/api/api";
import {devtools} from "zustand/middleware";

const useAuth = create<IAuthState>()(
    devtools(
        (set) => ({
            isLoggedIn: false,
            actionLoginUser: async (username: string, password: string) => {
                const data = await loginUser(username, password);
                set({isLoggedIn: data}, false, "auth/login");
            }
        })
    )
);

export default useAuth;