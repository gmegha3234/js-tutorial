// // Objects are referenced by reference
// let user = {
//     "name" : "Megha"
// };

// let admin = user;
// admin.age = 10;
// // console.log(user); { name: 'Megha', age: 10 }

// //Two objects can be equal if they are sharing same referenced.
// console.log(admin == user); // true

// let a = {};
// let b = {};
// console.log(a == b); //false

// // constant objects are also modified by assigning its properties
// const fruits = {
//     "apple" : 5,
//     "mango" : 8,
//     "orange" : 10
// };
// fruits.apple =6;// being constant we can modify its value
// console.log(fruits);
// let cloneFruit={};
// // fruits={"apple" : 2};// gives error for being constant

// //As objects share same reference, so actually to clone an object we can have methods
// //1. by looping
// for(let key in fruits){
//   cloneFruit[key] = fruits[key]; //now clone is a fully independent object with the same content
// }
// console.log(cloneFruit);
// cloneFruit.fig=11;
// //Now chnging clone will not change original fruit variable
// console.log(cloneFruit);//{ apple: 6, mango: 8, orange: 10, fig: 11 }
// console.log(fruits);//{ apple: 6, mango: 8, orange: 10 }

// //2. Object assign method
// let dest={};
// Object.assign(dest,cloneFruit);
// console.log(dest);
// let newUser = { name: "Megha", canEdit: false, canEdit: false };
// const edit = {canEdit : true};
// const write = {canWrite : true};

// Object.assign(newUser,edit,write,{name : "Ruhi"});// existing properties get override
// console.log(newUser);

// let newUser1 = {
//     name : "Megha",
//     "dob" :{
//         "year":2000,
//         "month" : "Feb",
//         "date" : 10
//     },
//     class : "10th"
// };

// let clone1 = Object.assign({},newUser1);
// console.log(newUser1.dob === clone1.dob);// true
// console.log(newUser1.name === clone1.name);// true

const obj1 = { name: "test", dob : {year: 2002} };

// // 3. spread operator
const obj2 = { ...obj1 };

// console.log(obj1 === obj2);//false
// // console.log(obj1.name === obj2.name);
// console.log(obj1.dob === obj2.dob);//true

/// All above methods perform shallow copy 
//If obj contains an object also then both dest and sourec share reference for same property

// For deep cloning we use structuredClone(object) clones the object with all nested properties.\

const obj3 = structuredClone(obj1);
console.log(obj3.dob === obj1.dob);// return false mean obj is deep cloned not sharing same reference

// Structured clone support all objects like obj,array,primitive but not function , it gives error

//circular cloning

let a = {name : "Yash"};
a.user = a; // same property inside that property
const b =structuredClone(a);
console.log(a);
console.log(b);
console.log(a == b); // false
console.log(a.user === a) // true
console.log(b.user === b) // true

