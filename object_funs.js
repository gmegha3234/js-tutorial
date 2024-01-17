// 'use strict';

// function sayHi(){
//     console.log("Hello");
// }
//  const user = {
//     name : "Megha",
//     giveAge : function(){ // function that is property of an object is called its method
//         console.log("My age is "+20);
//     },
//     giveColor(){// shorter expression
//         console.log("My favourite color is black");
//     },
//     giveName(){
//         console.log("My name is "+ this.name); //To access the object, a method can use the this keyword.
//     }
//  }

// user.giveAge()//  My age is 20
// user.sayHi = sayHi;//assigning already exist function
// user.sayHi();// Hello
// user.giveColor();// My favourite color is black
// user.giveName();

// let obj1 = {
//     "id" : 101,
//     "song" : "Unstoppable",
//     "duration_in_seconds" : 300,
//     // getSongName(){
//     //     console.log(obj1.song); // alos giving same result without this
//     // }
//     getSongName(){
//         console.log(this.song); // alos giving same result without this
//     }
// };
// obj1.getSongName();// giving Unstoppable

// // but if we copy it to another variable and call same function
// const obj2 = obj1;
// obj2.getSongName();// giving Unstoppable
// obj1 = null;
// obj2.getSongName();// leads to error as obj1 is not defined
// console.log(obj2.id);//101

// const employee1 = {name : "Megha"};
// const employee2 = {name : "Megha1"};

function getName() {
  console.log(this);
  console.log(global);
  console.log(globalThis);
}

// employee1.f = getName;
// employee2.f = getName;
// employee1.f(); // Megha
// employee2.f(); // Megha1

// employee1['f']();// Megha

// // getName();//fun can also be called without object but return undefined for this.name
// // But if we use strict mode it return error

getName();

globalThis.test = "test";
console.log(globalThis);

//In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

//When a function is called in the “method” syntax: object.method(), the value of this during the call is object
