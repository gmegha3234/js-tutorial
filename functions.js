function showMessage() {
    console.log("Hello I am Megha Gupta");
}
showMessage();

// a function can access outside variable but fun var cannot be accessed outside
let username = "Muzi";
function showUsernameWithName(name) {
    console.log(name + " "+username);
}
showUsernameWithName("Chuzi");

// a function can also change outer var
let book = "Jungle Book";
function showBook() {
    book = "Rich Dad Poor Dad";// modifying outer variable inside function
}
console.log("Before function call Book: " + book);
showBook();
console.log("After function call Book: " + book);

//But if we decalre function iwith same name inside function, then inside function it will behave as local
// and outside it take outer value

let culprit = "Nisha";
function changeCulprit() {
    let culprit = "Sadakshaya";// here culprit is declared inside function so local to function
    console.log("Inside function culprit name is " + culprit);
}
changeCulprit();
console.log("Outside function culprit name is " + culprit);// it is using outer variable so global variable

function add(num1, num2) {
    console.log("num1= " + num1);
    console.log("num1= " + num2);
    return num1 + num2;
}
console.log(add(2, 4));//2+4=6
//If we pass less args then other args are considered as undefined
console.log(add(2));//2+undefined=(2+NaN)=NaN


// default fun value
function multiply(num1, num2 = 10) {
    return num1 * num2;
}
console.log(multiply(1, 3));
console.log(multiply(2));

function showMes() {
    console.log("Megha! Focus Baby");
}
function showFunctionArgs(firstValue, secondValue = showMes()) {
    console.log(firstValue);
    // console.log(secondValue);
}
showFunctionArgs(1, 2);
showFunctionArgs(1);

//function having without return or simply return; will output undefined
function doNothing() {
    return;
}
function doNothing1() {
    console.log("hey");// it also return undefined as no return statement
}
console.log(doNothing() === undefined);//true
console.log(doNothing1() === undefined);//true

//return statement errors
// return // it generates error as after return Js assumes semicolon
//  (some + long + expression + or + whatever * f(a) + f(b))

// for writing return it should be
// return (
//     some + long + expression + or + whatever * f(a) + f(b) ---- not generate error
// )

//Primes range
function showPrimes($n) {
    for (let i = 2; i <$n; i++){
        if (isPrime(i)) {
            console.log(i + " is prime number");
        }
    }
}
function isPrime(num) {
    for (let i = 2; i <= num ** (1 / 2); i++){
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
showPrimes(15);
