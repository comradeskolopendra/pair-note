import {createHashRouter, RouterProvider} from "react-router";
import {Login} from "@/pages";

const router = createHashRouter([
    {
        path: "/",
        element: <Login/>,
    }
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;