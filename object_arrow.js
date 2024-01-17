// // // In arrow functions, there is no this
// // // If we refer this from a function, it takes it from outside normal function

// // // let user = {
// // //   firstName: "Ilya",
// // //   sayHi() {
// // //     let arrow = () => alert(this.firstName);
// // //     arrow();
// // //   }
// // // };

// // // user.sayHi(); // Ilya
// // let user = {
// //     firstName : "Riya",
    
// //     // greet : ()=>console.log(this.firstName)// undefined
// //     greet(){
// //         let arrow = () =>console.log(this.firstName);// arrow funs take this from normal outer function
// //         arrow();
// //     }
// // };
// // user.greet();// Riya 


// // // The value of this is one for the whole function, code blocks and object literals do not affect it.
// // // gives error

// // let user2 = {name : "Rakesh"};
// // user2.f = makeUser;
// // console.log(user2.f().ref);

// // function makeUser() {
// //   return {
// //     name: "John",
// //     ref:   this
// //   };
// // };
// // let user1 = makeUser();
// // console.log(user1.ref.name);// This give undefined because this refer to whole block
// // function makeUser() {
// //   return {
// //     name: "John",
// //     ref() {
// //       return this;
// //     }
// //   };
// // }

// // let user6 = makeUser();
// // console.log( user6.ref().name ); // John


// let calculator = {
//    read(a,b){
//     this.a = a;
//     this.b = b;
//    },
//    sum(){
//     return this.a + this.b;
//    },
//    mul(){
//     this.mult=this.a * this.b;
//     return this.mult;
//    }

// };

// calculator.read(2,3);
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//   },
// };

// ladder.up();
// ladder.up();
// console.log(ladder.step);//2
// ladder.down();
// ladder.showStep();
// ladder.down();

// console.log(ladder.step);
let ladder1 = {
  step: 0,
  up() {
    this.step++;
    return this; // we need to return this for promoting chain
  },
  down() {
    this.step--;
     return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
ladder1.up().up().down().showStep().down().showStep();