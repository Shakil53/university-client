import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        
    },
    {
        path: '/admin',
        element: <App></App>,
        children: adminPaths
    },
    {
        path: '/faculty',
        element: <App></App>,
        children: adminPaths
    },
    {
        path: '/student',
        element: <App></App>,
        children: adminPaths
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])


export default router;