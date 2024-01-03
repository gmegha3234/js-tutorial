// Class -> Class() -> object (data & methods)

const obj = {
    name: "Megha", // Key must always be a string
    yob: 1999,

    getName: function () {
        console.log(this.name)
    },

    getAge: function () {
        console.log(this);
    }
};

// const obj2 = {
//     name: "Shakeeb",
//     yob: 2000,
//     getName: obj.getName
// }

obj.getName();
obj.getAge();

obj.nickname = "M";
// obj.getAge = function () {
//     console.log(new Date().getFullYear() - this.yob);
// }

// obj.name
// obj["name"]
// console.log(obj.name, obj["name"]);
// console.log(obj);

// obj.getName();
// obj.getAge();
