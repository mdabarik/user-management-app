import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <h1>Error Page.</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default router;