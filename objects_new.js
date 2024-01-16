//Objects are used to store key value 

const obj = {};// object literal
const obj1 =  new Object();

console.log(obj);
console.log(obj1);
//key in always a string, if number is taken it is treated as string

let user = {
    "name" : "Megha",
    "age" : 20,
    "like birds": ["Sparrow", "Pegion"]
};
//accessing objects
console.log(user);
console.log(user.name);
console.log(user.age);

//adding value to object
user.isAdmin = true;
console.log(user);

//delete property in object
delete user.isAdmin;
console.log(user);

delete user.agee1; //  trying to delete a property that does not exist do not cause error
console.log(user);// return undefined

// console.log(user.like birds)  it doesnot work for multward we have to use square backets
console.log(user['like birds']);

let key="age";
console.log(user[key]); //Hey key is variable name

let fruit = "apple";
let veg = "onion";
let key1 = "dry";
let list ={
    [fruit] : 20,// this is known as computed properties
    "mango" : 9,
    [key1+" fruits"] : 70
};
console.log(list.apple);// returns 20
list[veg] = 23;
console.log(list);// return { apple: 20, mango: 9, 'dry fruits': 70, onion: 23 }

function createUser(name, age){
    return {
      name, // correspondes to name: name,
      age, // correspondes to age: age
      class : "10th"
    };
}
let user1= createUser("John",30);
console.log(user1); // { name: 'John', age: 30 }

let obj2= {
    for : 1,
    let : 2,// keywoards can be property name but acccessed through dot 
    return : 3,
    0 : "10",
    true : "data",
    test : undefined,
    test1 : null
}
console.log(obj2.for);// but cannot be destructed
console.log(obj2["0"]); // key is automatically converted to string 
console.log(obj2[0]);
console.log(obj2.true); // data
console.log(obj2['for']); 


//use of in for checking key
console.log("age" in obj2); // false
console.log("for" in obj2); // true
console.log("test" in obj2); // true whether value of test is undefined and null
console.log("test1" in obj2); 


//looping through keys
for (let keys in obj2){
    console.log(keys+":" );
    console.log(obj2[keys] );
}

//sorting of objects
//“ordered in a special fashion”: integer properties are sorted, others appear in creation order.
let sortObj = {
    4 : "Megha",
    1 : "Chuzi",
    "j" : "Ruhi",
    "A" : "Yippy"
};
for( let key in sortObj){
    console.log(key);// 1, 4, j , A
}
// But we can set integer properties in case of creation by adding + to it;
let sortObj1 = {
  "+4": "Megha",
  "+1": "Chuzi",
  j: "Ruhi",
  A: "Yippy",
};
for (let key in sortObj1) {
  console.log(key); // +4, +1, j , A   // now keys appear in creation order
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum=0;
for (let i in salaries){
    sum+=salaries[i];
}
console.log(sum);


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
//Objects are stored,passed and copied by refernce
multiplyNumeric(menu);

function multiplyNumeric(menu){
    for(let i in menu){
        // if(Number.isInteger(menu[i])) menu[i]*=2;
        if(typeof menu[i] == "number") menu[i]*=2;
    }
}
console.log(menu);



