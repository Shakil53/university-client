// const arr = [1, 2, 3, 4]

// const result = arr.reduce((acc, item) => {
//     acc.push(acc + item);
// return acc;
// }, [])

// console.log('Final Result =>',result);



const admintPaths2 = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: 'ADMIN_DASHBOARD',
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/create-admin',
                element: 'CREATE_ADMIN'
            },
            {
                name: 'Create Faculty',
                path: '/admin/create-faculty',
                element: 'CREATE_FACULTY'
            },
            {
                name: 'Create Student',
                path: '/admin/create-student',
                element: 'CREATE_STUDENT'
            },
        ]
    },
    
]



const newArray = admintPaths2.reduce((acc, item) => {
    acc.push(item);
    return acc;
}, [])

console.log(newArray);