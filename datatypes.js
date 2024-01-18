//1. Primitives(not composable, meaning not having properties only values)
//string
//number
//bigint
//boolean
//Symbol
//null
//undefined

//2.Object(heavier than primitives)

//JavaScript get the string value to an object, by new String(str). This object is called a wrapper object. It inherits all string methods, and is used to resolve the property reference. Once the property has been resolved, the wrapper object is discarded.

//Now astring is primitive
const str="i am a string";// str primitve
console.log(str.toUpperCase());// now str behave as object
// Js coarces string value to an object called String(str) and allow to access its functions.
//Such funs are called wrapper objects and once property is resolved, wrapper object is discarded

//Different object wrappers
//String, Number, Boolean, Symbol and BigInt
//Null and Undefined are properly primitives not any wrapper class

let str1 = "Hello";

str1.test = 5; // (*) -- In not strict mode ,it not returns error but in strict mode it returns error

console.log(str1.test);//undefined because wrapper object upto this line is discarded 





