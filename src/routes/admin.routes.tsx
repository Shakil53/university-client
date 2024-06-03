import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const admintPaths2 = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/create-admin',
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: 'Create Faculty',
                path: '/admin/create-faculty',
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name: 'Create Student',
                path: '/admin/create-student',
                element: <CreateStudent></CreateStudent>
            },
        ]
    },
    
]




export const adminPaths = [
          
    {
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
    {
        path: 'create-student',
        element: <CreateStudent></CreateStudent>
    },
    {
        path: 'create-admin',
        element: <CreateAdmin></CreateAdmin>
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty></CreateFaculty>
    },
  
]