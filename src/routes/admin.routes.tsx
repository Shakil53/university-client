import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
    path: string,
    element: ReactNode,
}

type TSidebarItem = {
    key: string,
    label: ReactNode,
    children?: TSidebarItem[] 
}


export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
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
            {
                name: 'Create Member',
                path: 'create-Member',
                element: <CreateStudent></CreateStudent>
            },
        ]
    },
    
]
// mainLayout programatic way
export const adminSidebarItems = adminPaths.reduce(
      (acc: TSidebarItem[], item) => {
        if (item.path && item.name) {
          acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
          });
        }
    
        if (item.children) {
          acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => ({
              key: child.name,
              label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
            })),
          });
        }
    
        return acc;
      },
      []
    );



// programatic way - routes

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
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