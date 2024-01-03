//string equality
console.log(0 == false);//true
console.log("" == false);//true
console.log(" " == false);//true because the strings are first converted to numbers and
//empty string becomes 0

// As empty string is also considered as false in comparison so we use === that do not allow type conversion
console.log(0 === false);//false
console.log("" === false);//false
console.log(" " === false)//false

//null and undefined comparisons
console.log(null == undefined);//true
console.log(null === undefined);//false

//but when null and undefined as compared with > and so  on
// null becomes 0
//undefined becomes NaN

console.log(null > 0);//false
console.log(null >= 0);//true as null becomes 0
console.log(null == 0);// false

//some assignments
console.log("-----assignment------");
console.log(5 > 4);//true
console.log("apple" > "pineapple");//false as p>a
console.log("2" > "12");// false as strings convert to numbers
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(null == "\n0\n");//true  as null only equals undefined
console.log(null === +"\n0\n");//false strict comparison



