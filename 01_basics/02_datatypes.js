"use strict";// use all javascript code as newer version
// alert(3+3);// we are using nodejs not browser , javascript engine is bound with browser window as well
let age= 18;
let name="oscar";
let isLoggedIn = true;
let state;

// types of datatypes 
// number => 2 to power 53 size 

 // bigint => for big websites where inputs are very large like stock market etc
// symbol => unique used in react and figma
 // string=> " "
 // boolean => true/false
 // undefined means: "I don't have a value yet."
// JavaScript gives this automatically when you declare a variable but don’t assign a value.

// null means: "I intentionally have no value."
// You set it yourself to show that a variable is empty on purpose.

// Both null and undefined are primitive values.

// BUT — due to a bug in JavaScript, typeof null shows "object" instead of "null".

let a;
console.log(a);        // undefined

let b = null;
console.log(b);        // null
console.log(typeof b); // "object" ← weird, but expected

//Primitive values are the most basic building blocks of data in JavaScript.They are not objects, and they hold only a single value — not a collection of values.
//example- String, bigint, boolean, number, undefined , null etc
// objects, arrays, functions are non-primitive a


