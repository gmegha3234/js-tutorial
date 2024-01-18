//The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
//As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.//

//1.string
//For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like alert:
//happens in alert(obj);

//2."number"
//For an object-to-number conversion, like when we’re doing maths:
// explicit conversion
// let num = Number(obj);

// // maths (except binary plus)
// let n = +obj; // unary plus
// let delta = date1 - date2;

// // less/greater comparison
// let greater = user1 > user2;

//3.default
//Occurs in rare cases when the operator is “not sure” what type to expect.
// binary plus uses the "default" hint
// let total = obj1 + obj2;

// // obj == number uses the "default" hint
// if (user == 1) { ... };