
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



