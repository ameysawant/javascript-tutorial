//[ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ - - - - - var - - - - - ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ]

// // this is how we declare var variables
// var myName;
// var mySurname;
// var myAge;

// // we can use var keyword again if we want to assign.
// var myName = "Amey";
// var mySurname = "Sawant";
// var myAge = 43;

// // this is how we assign values to variables
// myName = "Amey";
// mySurname = "Sawant";
// myAge = 43;

// // var variable are global scope and can access anywhere
// {
//   var myName = "Amey";
//   var mySurname = "Sawant";
//   var myAge = 43;
// }

// // this is how we console.log variables
// console.log(myName);
// console.log(mySurname);
// console.log(myAge);

//[ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ - - - - - let - - - - - ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ]

// this is how we declare let variables
// let myName;
// let mySurname;
// let myAge;

// but we cannot redeclare it like this
// let myName = "Amey";
// let mySurname = "Sawant";
// let myAge = 43;

// this is how we assign values to variables
// myName = "Amey";
// mySurname = "Sawant";
// myAge = 43;

// let variable are block scope
// {
//   let myName = "Amey";
//   let mySurname = "Sawant";
//   let myAge = 43;
// }

// this is how we console.log variables
// console.log(myName);
// console.log(mySurname);
// console.log(myAge);

//[ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ - - - - - const - - - - - ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ]

// you cannot declare const variable
// const myName;
// const mySurname;
// const myAge;

// you cannot redeclare const variables
// const myName = "Amey";
// const mySurname = "Sawant";
// const myAge = 43;

// you cannot assign like this because you cannot declare empty variable above
// myName = "Amey";
// mySurname = "Sawant";
// myAge = 43;

// while using const you have to declare and assign compulsory
// const myName = "Amey";
// const mySurname = "Sawant";
// const myAge = 43;

// // const variable are block scope
// {
//   const myName = "Amey";
//   const mySurname = "Sawant";
//   const myAge = 43;
// }

// this is how we console.log variables
// console.log(myName);
// console.log(mySurname);
// console.log(myAge);

// NOTES -
// 1. if you declare a variable console.log(myName) it returns "undefined".
// 2. var - var keyword can be redeclare and can assign or reassign and it's a global scope supported
// 3. let - let keyword cannot redeclare but can assign or reassign and it's a block scope
// 4. const - const keyword must have declaration and initialization both and it's a block scope
// 5. variables are case-sensitive
// 6. letters, digits, underscore, $ is allowed (spaces are not allowed)
// 7. reserved words cannot be variable names in javaScript
// 8. cannot start variable name with number
