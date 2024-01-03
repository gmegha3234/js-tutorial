//example 1

// let jsName = prompt("What is the “official” name of JavaScript?");
// if (jsName === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don’t know? ECMAScript!");
// }

//example 2
// let number = prompt("Enter a number");
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//example 3
// let result=(a+b<4)?'Below':'Over';

//example 4
let login = 'Employee';
let message = (login == 'Employee') ? 'Hello' : (
    (login == 'Director') ? 'Greetings' : (
        (login == "") ? 'No Login' : ''
    )
);
console.log(message);

//example 5
let age = 34;
if (age >= 14 && age <= 90) {
    console.log("Age criteria is matched");
}
// for not
// if (!(age >= 14 && age <= 90)) {

//example 6
// let person = prompt("Who is there?", "");
// if (person == "Admin") {
//   let password = prompt("Password?", "");
//   if (password == "Master") {
//     alert("The Welcome");
//   } else if (password === " " || password === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong Password");
//   }
// } else if (person === " " || person === null) {
//   alert("Canceled");
// } else {
//   alert("I don't know you");
// }

//null coalescing
let user = "John";
console.log(user ?? "Anonymous User");//John

let fruit = "";
console.log(fruit ?? "No Fruit Selected");// return blank

let veg = null;
console.log(veg ?? "No Fruit Selected");// return  No Fruit Selected

let condition = undefined;
console.log(condition ?? "No condition applied");// return No Condition Selected

let height = 0;
console.log(height || 100);//100
console.log(height ?? 100)//0

// a way to move out of nested loop using label when break is encountered
outer: for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        if (j == 3) {
            break outer;
        }
        console.log(j);
    }
}
console.log("Done!");

//even numbers
for (let i = 2; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

//do while
// let number = prompt("Enter a number");
// while(number < 100){
//   number = prompt("Enter a number");
//   if(number=== ""){
//     break;
//   }
    
// }
// another way
// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

//prime number
// let number = prompt("Enter a number");
// let flag = 0;
// for (let i = 2; i <= number ** (1 / 2); i++) {
//   if (number % i == 0) {
//     flag = 1;
//     break;
//   }
// }
// if (flag) {
//   alert(number + " is not a prime number");
// } else {
//   alert(number + " is a prime number");
// }

//prime number between range
// let number = prompt("Enter range");
// nextPrime: for (let i = 2; i < number; i++) {
//   for (let j = 2; j <= i ** (1 / 2); j++) {
//     if (i % j == 0) {
//       continue nextPrime;//moves out of the loop
//     }
//   }
//   alert(i);
// }

//case always check type
// let arg = prompt("Enter a value?");------ This will give string
// switch (arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
//     break;

//   case "2":
//     alert("Two");
//     break;

//   case 3:// so here when 3 is entered, default block is excuted as 3 is not here a string
//     alert("Never executes!");
//     break;
//   default:
//     alert("An unknown value");
// }

//example
let browser = "Bing";
if (browser == "Edge") {
    console.log("You've got the Edge!");
} else if (browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

//exmaple
let a = +2;
switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log(2, 3);
        break;
}
