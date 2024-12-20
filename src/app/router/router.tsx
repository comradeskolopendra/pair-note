import {createHashRouter, RouterProvider} from "react-router";
import {LoginPage, MainPage} from "@/pages";
import {AuthProtectedRoute, UnAuthProtectedRoute} from "@/app/protected-route/protected-route";

const router = createHashRouter([
    {
        path: "/login",
        element: (
            <UnAuthProtectedRoute>
                <LoginPage/>
            </UnAuthProtectedRoute>
        )
    },
    {
        path: "/",
        element: (
            <AuthProtectedRoute>
                <MainPage/>
            </AuthProtectedRoute>
        )
    }
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;