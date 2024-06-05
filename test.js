// const arr = [1, 2, 3, 4]

// const result = arr.reduce((acc, item) => {
//     acc.push(acc + item);
// return acc;
// }, [])

// console.log('Final Result =>',result);



const admintPaths2 = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: 'ADMIN_DASHBOARD',
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: 'CREATE_ADMIN'
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: 'CREATE_FACULTY'
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: 'CREATE_STUDENT'
            },
        ]
    },
    
]

// main layout- programatic way
const newArray = admintPaths2.reduce((acc, item) => {
    if (item.path && item.element) {
        acc.push({
            key: item.name,
            label: "NAVLINK"
       })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => (
                {
                    key: child.name,
                    label: "NAVLINK"
                }
            ))
       })
    }
    return acc;
}, [])

console.log(newArray);














































// start spark solution--------------
// const newArray = admintPaths2.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//        })
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc;
// }, [])

// console.log(newArray);


// ------------------------------------------
// object

// regular function
// function hello() {
//     console.log(hello);
//     //return undefine
// }

// //function expression
// const hello = function () {
//     console.log(hello);
// }

// //named function exxpression
// const hello = function userName() {
//     console.log("hello world");
// }

// //arrow function
// const hello = () => {
//     console.log('hello world');
// }

//anonymous function
// function hello() {
//     return () => {
//         console.log('hello world');
//     }
// }

// //using object literal
// let person = {
//     name: 'shakil',
//     age: 12,
//     greet: function () {
//         console.log('hello', this.name);
//     }
// }

//using constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }


//using object.create

// let person2 = Object.create(person);
// person2.name = 'Alice'

// -----------------------------------------
//Array

//creating an array

// let fruits = ['Apple', 'Banana', 'Cherry'];

// // console.log(fruits[0]);

// fruits.push('Date')
// console.log(fruits);

// let lastF = fruits.pop();
// // console.log(lastF);
// // console.log(fruits);


// //iterating over elements using forEach
// fruits.forEach(function (fruit) {
//     // console.log(fruit);
// })

// //iterating over elements using map
// fruits.map(fruit => {
//     // console.log(fruit);
// })

//-------------------------------------------
// // Array of objects
// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// // Function to find user by name
// function findUserByName(name) {
//     return users.find(user => user.name === name);
// }

// // Function to add a new user
// function addUser(name, age) {
//     users.push({ name, age });
// }

// // Using the functions
// console.log(findUserByName("Bob")); // { name: "Bob", age: 30 }
// addUser("Dave", 40);
// // console.log(users);




//call, applay and bind

// let person1 = {
//     name: 'Shakil',
//     age: 23,
// }

// let person2 = {
//     name: 'Nitul',
//     age: 25,
// }


// function invite(greeting1, greeting2) {
//     console.log(
//         greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//     );
// }


// const firstOrderFunc = () => {
//     console.log('hello, I am a First order function');
//     const higherOrder = (firstOrderFunc) => firstOrderFunc()

//     higherOrder(firstOrderFunc)
// }