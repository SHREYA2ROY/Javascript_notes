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

//STRING FAMOUS METHODS (WILL ADD MORE )
const mess = new String('shreya is a good girl');

console.log(mess.length);          //output=> 21 (including spaces)
console.log(mess.toUpperCase());   //output=> SHREYA IS A GOOD GIRL
console.log(mess[5]);              //output=> a (indexing starts from 0)
console.log(mess.charAt(2));       //output=> r
console.log(mess.indexOf('r'));    //output=> 2(mess.indexOf("r"),the double quotes same as single)
console.log(mess.substring(0,6));  //output=> shreya(6 (endIndex) is excluded, in place of 0(startindex),-ve values are ignored unlike slice method, it is considered 0)

/*
Index: 0| 1 | 2 | 3 | 4 |5 |6    | 7 | 8 |9    |10 | 11  |12 | 13| 14 | 15| 16  |17|18 |19 |20
Char : s| h | r | e | y |a |space| i | s |space| a |space| g | o | o  | d |space| g| i | r | l

*///**************SLICE**************

console.log(mess.slice(-8,4));  //output=> empty string.
/* 
🧩 So what is .slice(-8, 4) doing?
-8 means: 21 - 8 = 13 → So start = 13
end = 4
Now .slice(13, 4) — here, start > end, which is invalid in .slice().

📌 Result: JavaScript just returns an empty string.

console.log(mess.slice(-8));        //OUTPUT=> ood girl
console.log(mess.slice(0));         //OUTPUT=> shreya is a good girl
console.log(mess.slice(4));         //OUTPUT=> ya is a good girl
console.log(mess.slice(" ",4));     //OUTPUT=> shre   BOTH ARE TREATED AS SAME
console.log(mess.slice(0,4));       //OUTPUT=> shre
console.log(mess.slice(-8,15));     //OUTPUT=> oo     

*/

console.log(mess.trim()); //output=> same , it just terminates start and end white spaces & line terminators, Line terminators break the text into new lines. 
/* 
example of line terminator:-
   |-----------------------------------|
   |  let message = "Hello\nWorld!";   |
   |  console.log(message);            |
   |  output=>Hello                    |
   |          World!                   |
   |-----------------------------------|
*/


console.log(mess.replace("r","3")); //output=> sh3eya is a good girl , .replaceAll replaces all Rs
console.log(mess.includes("is")); //true
console.log(mess.split(" ")); // ['shreya','is','a','good','girl']
/*
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
.split() splits a string into an array based on the separator you provide.

1. ✅ str.split(); — No separator =>returns an array with the whole string as a single element.
const str = "Hello World";
console.log(str.split());     ouput=> ["Hello World"] single element

2. ✅ str.split(" "); — Space separator=>splits the string at every space and gives an array of words.
const str = "Hello World";
console.log(str.split(" "));  output=> ["Hello", "World"]

3. ✅ What is string.split(separator, limit) ?
separator: The character(s) or pattern where the string is split.
limit: (Optional) The maximum number of items to include in the resulting array.

const str = "apple,banana,grape,orange";
console.log(str.split(",", 2));  output=> ["apple", "banana"]

*/