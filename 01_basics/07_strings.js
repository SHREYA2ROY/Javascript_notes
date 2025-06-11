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

/*

In JavaScript, strings can exist in two forms: primitive strings like "hello" and String objects created using new String("hello")
"STRING OBJECT  is a special type of non-primitive data type that does not mutate."

Yes — it's non-primitive, but behaves like a primitive in terms of immutability. That's what makes it special and a bit confusing for newcomers.
----------------------------------------------------------------------------------------------
| Feature    | String Object       |    Other Non-Primitive datatypes(obj,array,functions)   |
|------------|-----------------    |---------------------------------------------------------|
| Type       | "object"            | "object" /"function"                                    |
| Mutability | Immutable           | Mutable                                                 |
| Stored in  | Heap                | Heap                                                    |
| Mutating   | Returns new strings | Changes original                                        |
----------------------------------------------------------------------------------------------


*/

let user= new String("shreya"); // String constructor
//when you write a String object (created with new String("text")) to the console in JavaScript, you’ll notice many more options or properties than with a primitive string.