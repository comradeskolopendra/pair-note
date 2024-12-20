import {FC, ReactNode} from "react";
import useAuth from "@/entities/auth";
import {Navigate} from "react-router";

interface IProtectedRoute {
    children: ReactNode;
}

const ProtectedRoute =
    (isForProtected: boolean): FC<IProtectedRoute> =>
        ({children}) => {
            const {isLoggedIn} = useAuth();

            if (isLoggedIn && !isForProtected) {
                return <Navigate to={"/"} replace />
            }

            if (!isLoggedIn && isForProtected) {
                return <Navigate to={"/login"} replace />
            }

            return children;
        }

export const UnAuthProtectedRoute = ProtectedRoute(false);
export const AuthProtectedRoute = ProtectedRoute(true);