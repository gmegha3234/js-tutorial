
//Constructor funs
//1. They start with capital letter
//2 . They should be executed only using "new" keywoard

// When a function is executed with new, it does the following steps:
//- A new obj is created and assigned to this.
//- The fun body executes.Usually it modifies this , add new properties to it.
//- The value of this is returned.

function User(name ){// constructor fun
// this = {} // implicitly
this.name = name;
this.isAdmin = false;
 //return this; // implicitely
}
const user1 = new User("Megha");
const user2 = new User("Ruhi");
console.log(user1, user2);


//new point
//This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

let data = new function(){
    this.name = "Aarohi",
    this.age = 31
};

//We can check whether a function is called from new or simple

function Test(){
    console.log(new.target);// to check wheher fun is called using new or not
}
Test()    //return undefined
new Test();// return [Function: Test]

function User1(name) {
  if (!new.target) { // if you run me without new
    return new User1(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User1("John"); // redirects call to new User // call without new
console.log(john); // John

let rajan = new  User1("Rajan");//call with  new
console.log(rajan);

//Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if we have a return statement
//then there are certain rules
//return with an object returns that object, in all other cases this is returned.

function BigUser(){
    this.name = "Pankaj";
    
    return {name : "Rahul"};//(return with object) having priority

}
console.log(new BigUser().name);// Rahul 

function BigUser1(){
    this.name = "Pankaj"
    return 2;//(return without object)

}
console.log(new BigUser1());// BigUser1 { name: 'Pankaj' } not having priority

function FunMethod(){
    this.name = "Ruhi";
    this.getName = function(){
        console.log("My name is "+ this.name);
    }
}

const test = new FunMethod();
test.getName();//My name is Ruhi
new FunMethod().getName();//My name is Ruhi
