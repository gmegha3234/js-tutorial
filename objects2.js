let obj = {
    name: "Megha",
    class: "5th",
    roll_no: 3,
    nationality: "India"
};
for (let key in obj) {
    console.log("key:"+key,"value:"+obj[key]);
}

let codes = {
    "1": 401,
    "42": 402,
    "6":809
}
for (let key in codes) {
    console.log(key);// returns 1,6, 42-----sort keys for numeric order
}
console.log(String(Math.trunc(Number("49"))));//49//trunc- return integer part of string
console.log( String(Math.trunc(Number("+49"))) ); //49// "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number("1.2"))));//1

//if we want integer roperty to be listed n order of creation not sorted order
//we can attach + to them like
let codesNew = {
    "+1": 401,
    "+42": 402,
    "+6": 879
};
for (let codes in codesNew) {
    console.log(codes);//(+1,+42,+6)   in creation orders
}

//example
let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

//example
let isEmpty = (schedule) => Object.keys(schedule).length < 1;
let schedule = {};
console.log(isEmpty(schedule));
schedule["8.30"] = "get up";
console.log(isEmpty(schedule));

//another way to check if object is empty
// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }

//example
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}
console.log(sum);

//example
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let list in menu) {
        if (Number.isInteger(menu[list])) {
          menu[list] *= 2;
        } 
    }
}
console.log(menu);

//another way( using typeof)
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

//equaltiy
let a = {};
let b = a;// a and b refer to same object
console.log(a === b);//true
console.log(a == b);//true
let c = {};// a and c refer to different object eventhoufh they both are empty
console.log(a === c);//false
console.log(a == c);//false

const marks = {
    "Sneha": 400,
    "SHruti": 490
};
//though it is declared as const still it's properties can be changed
marks.Shruti = 677;
console.log(marks);//{ Sneha: 400, SHruti: 490, Shruti: 677 }

//copy object not passing it reference
//changing 1 will not affect other
let clone = {};
for (let i in marks) {
    clone[i] = marks[i];
}
clone["Sugu"] = 900;
console.log(marks);//{ Sneha: 400, SHruti: 490, Shruti: 677 }
console.log(clone);//{ Sneha: 400, SHruti: 490, Shruti: 677, Sugu: 900 }


