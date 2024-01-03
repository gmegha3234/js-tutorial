//assigmnent 
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);//new way of assignment
console.log( a ); // 3
console.log(c); // 0

//chaining
let e, f, g;
e = f = g = 3;//chaining assignment
console.log(e, f, g);//3 3 3

//increment/decrement
let h = 1;
console.log(2 * ++h);//4
console.log(h);//2
console.log(2 * h++);//4

//type erroors
console.log("--------------type conversion error-----------------")
console.log("" + 1 + 0);//10
console.log("" - 1 + 0);//-1
console.log(true + false)//(1+0)=1
console.log(6 / "3")//2
console.log("2" * "3")//6
console.log(4 + 5 + "px")//9px
console.log("$" + 4 + 5)//$45
console.log("4" - 2)//2
console.log("4px" - 2)//NaN
console.log("  -9  " + 5)//-9 5
console.log("  -9  " - 5)//-14
console.log(null + 1)//Nan
console.log(undefined + 1)//Nan
console.log(" \t \n" - 2)//-2

//String comparison
console.log('A' > 'Z');//false(follow unicode way or dictionary)
console.log('A' > 'a');//false
console.log('Glow' > 'Gleew');// true as o is greater than e
console.log( 'Bee' > 'Be' );// it has large no of characters
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1

//comparisons
console.log("------comparision --------------")
console.log(true == 1);// true 
console.log(false == 0);// true
console.log(true === 1);// false
console.log(false === 0);//false--------- because === checks datatypes also


