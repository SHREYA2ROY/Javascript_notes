const name= "Shreya";
const age= 23;
console.log(name+age+"hello");
//very old format 

/* STRING INTERPOLATION=String interpolation in JavaScript is a way to insert variables or expressions inside a string. The modern and most readable way to do this is using template literals

What is template literals ?= Template literals are a special kind of string syntax in JavaScript 

`Some text ${expression}`
@ Uses backticks (`) instead of quotes (' or ")
@ ${...} is used to insert variables or expressions

*/
const userName="shreya";
const userAge= 23;
const message= `hello ${userName} and good that you are ${userAge} years old`;
console.log(message);
//OUTPUT= hello shreya and good that you are 23 years old

const messageSecond= `hello ${userName.toUpperCase()} and good that you are ${userAge} years old`;
//OUTPUT= hello SHREYA and good that you are 23 years old
