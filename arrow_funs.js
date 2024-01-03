let sum = (a, b) => a + b;
console.log(sum(1, 3));

let messge = () => console.log("test itslf");
messge();

let fullName = (fname, lname) => {
    console.log("first name is " + fname);
    console.log("second name is " + lname);
    return fname + " " + lname;
}
console.log(fullName('Megha', 'Gupta'));

//example
newfun=(question, yes, no)=> {
    if (question > 0) yes();
    else no();
};
newfun(-100, () => console.log("Greater than 1"), () => console.log("Less than 1"));