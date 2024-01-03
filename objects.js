let obj = {};
let obj1 = new Object();
console.log(obj);//{}
console.log(obj1);//{}

let user = {
    name: "megha",
    age: 20,
    "lovely birds":"Peacock",
};
console.log(user.name);
console.log(user.age);

//adding property in objects
user.isAdmin = true;
console.log(user);

//removing property in objetcs
delete user.isAdmin;
console.log(user);

//for accessing multine word keys
console.log(user['lovely birds']);

let key = "name";
console.log(user.key);//undefined as . cannot calculate var
console.log(user[key]);//return original value as [] notation executes expression

let fruit = "apple";
let list = {
    [fruit]: 5,
    [fruit + "categories"]: 10
};
console.log(list);
console.log(list.apple);//5-----Here [fruit] take value of fruit variable as key
console.log(list.applecategories);

//It is also possible to have same property and value 
function objectMaking(name, age) {
    return {
        name: name,
        age: age,
    };
}
let obj2 = objectMaking("John", 200);
console.log(obj2.name); 

//another way
function newObject(name, age) {
    return {
        name,// it will same as name:name and age:age
        age
    };
}

let obj3 = newObject("Sneha", 12);
console.log(obj3);
let obj4 = {
    for: 1,//keywords can also become property name
    let: 2,
    0: "Megha",
    age: 10,
    test:undefined,
    
};
console.log(obj4.for, obj4.let, obj4[0] , obj4["0"]);
console.log("forq" in obj4);//chcek whether key exist in object
console.log(0 in obj4);
let key1 = "age";
console.log(key1 in obj4);// when kry name is not encoted in "", then it is considered as var
console.log(obj4.test);
console.log("test" in obj4);











