'use strict';
console.log("Hello world");

// Variables
let name1 = "Megha";
console.log(name1);

//$ and _ can also be treated as variables name and come inside variable name
let $ = 1;
let _ = 2;
console.log($ + _);

//- or any symbols cannot be used in variables
// let -= 2;--------ERROR---------------
// let 1a = 3;--------ERROR---------------

// n = 5;  In earlier it is allowed to declare variable without let or var but if we use "use strict"
// then this statement will return error.

//assignment-1
let admin ;
let name = "John";
admin = name;
console.log(admin);

//assigment-2
let ourPlanet = "Earth";
let currentUser = "Megha";

//const declaration
const DATE_OF_BIRTH = "05-08-1998";
console.log(DATE_OF_BIRTH);

//Extended string
let studentName = "Ilya";
console.log(`hello ${1}`);// hello 1
console.log(`hello ${"studentName"}`);// hello studentName
console.log(`hello ${studentName}`);//hello Ilya

//Conversion
let numericString = "123465";
console.log(typeof numericString);
numericString = Number(numericString);
console.log(typeof numericString);
numericString = String(numericString);
console.log(typeof numericString);

//error conversion ---return NAN
let text = Number("a string ");
console.log(text);//NaN
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(" "));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(0))//0
console.log( Number("   123   ") ); // 123 remove all whitespaces
console.log( Number("123z") );      // NaN (error reading a number at "z")

//Boolean Cobnversions
console.log("---------------Boolean Conversion ---------------")
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean(""));//false-----empty string correspondes to false
console.log(Boolean(" "));//space betwween string correspondes to true
console.log(Boolean(null));//false-----empty values like null, undefined, and NaN, become false.
console.log(Boolean("hello"));//true

//String concatenation
let testString = "my" + " " + "name";
console.log(testString);//myname
console.log("1" + 2 + 2);//122--------assume first char i.e string then all others are considered string thus 122
console.log(1 + 2 + "3");//33 -------first added and then string concat
console.log(1 + 3 + 5 + "7" + 2 + 4);//(1+2+5=9)+"7"+//after string all rest are considered string------9724
//Only '+' works with string all other operators convert operands to number and then operate
console.log('6' - 2);//4
console.log(6 ** '3');//216

//Unary Numbers
let x = 1;
console.log(+x);//remain same
console.log(-x);//negates number
let y = "2";
let z = "3";
console.log(y + z);//23 ----treated as string
console.log(+y + +z);//5-----converted to number


