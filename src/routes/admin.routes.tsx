import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = {
    path: string,
    element: ReactNode,
}


export const admintPaths = [
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
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent></CreateStudent>
            },
        ]
    },
    
]

// programatic way

export const adminRoutes = admintPaths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
       })
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc;
}, [])

console.log(adminRoutes);




// Hard coded way

// export const adminPaths = [
          
//     {
//         path: 'dashboard',
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent></CreateStudent>
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin></CreateAdmin>
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty></CreateFaculty>
//     },
  
// ]