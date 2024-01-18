const user = {};
console.log(user.address)//undefined
// console.log(user.address.street);//error

//If we are not sure that object contain particular property we can use optional chaining
//The optional chaining ?. stops the evaluation 
//if the value before ?. is undefined or null and returns undefined.

console.log(user?.address?.street);// undefined

//works if value?.prop ---- if value exist => prop is checked
                       //--- otherwise value is null/undefined, it return undefined and prop is not executed

//If there’s no variable user at all, then user?.anything triggers an error:

// console.log(a?.value);// error as optional chaing gives error if var is not declared
// user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++



// It also works with function
let person = {
    admin(){
        console.log("I am admin");
    }
}
let person1= {};
person.admin();
// person1.admin();// gives erro
person1.admin?.();// returns morthing


let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]);//John
console.log(user2?.[key]);//undefined

//We can use ?. for safe reading and deleting, but not writing
delete user?.[key];
console.log(user);
delete user2?.[key];//not give error
console.log(user);

let user_r = null;

// user_r?.name = "John";   cannot do insertion using optional changing function

//The optional chaining ?. syntax has three forms:

    // obj?.prop – returns obj.prop if obj exists, otherwise undefined.
    // obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
    // obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
