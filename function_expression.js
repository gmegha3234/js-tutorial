'use strict';
let sayHi = function () {// Here we are defining function in an expression
    console.log("Hi I am function expression.");
};
sayHi();
console.log(sayHi);//[Function: sayHi]----printing function as a value

//copy one fun to another
let func = sayHi;
func();

//functions as arguments
let showOK = function () {
    console.log("You agreed!");
}
let showCancel = function () {
    console.log("you canceled");
}
function question(value, yes, no) {// taking args as func
    value > 0 ? yes() : no();//executing funs
}
question(-100, showOK, showCancel);// sending funs as args

question(100, function name() {
    console.log("ist function");// these functions have no name so called anonymous functions
}, function () {// these functions are only accessible inside ask
    console.log("2nd question");
});

//By using fun declaration welcome become blick scoped so cannot accessed oustide when "use strict"
let age=7;
if (age > 18) {
    function welcome() {
        console.log("You are eligible to vote");
    }
} else {
    function welcome() {
        console.log("You are not eligible to vote");
    }
}
// welcome();-------return error

//same thing can be successfully achieved using function expression
let adult;
if (age > 18) {
    adult = function welcome() {
        console.log("You are eligible to vote");
    }
} else {
    adult = function welcome() {
        console.log("You are not eligible to vote");
    }
}
adult();// working fine

