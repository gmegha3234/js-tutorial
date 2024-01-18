// const obj = {
//   name: "Hello",
//   age: 23,
//   name: "megha",
// };

// obj.date = "12/12/12";

// const key = "date";

// console.log(obj[key]); // obj["date"]

// for (let k in obj) {
//   console.log(k, obj[k]);
// }

// const o = {
//     name : "Megha",

//     get : function() {
//         return this.name
//     }
// }

// const fn = o.get;

// console.log(o.get());
// console.log(fn());
const o1 = {
  name: "Megha",
};

const o2 = {
  name: "Nisha",
};

function getName() {
    return this.name;
}

o1.getName = getName;
o2.getName = getName;

console.log(o1.getName());
console.log(o2.getName());
