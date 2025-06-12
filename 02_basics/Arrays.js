// the only difference lie in declaring the array as let and const is that
// let one can be reassigned , const one can't be, both can be mutated

const user=[1,2,3,4, "shreya", true];

/* 
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name

1) JavaScript arrays are resizable and can contain a mix of different data types
2) JavaScript arrays are zero-indexed

*/

//ANOTHER WAY OF DEFINING ARRAY OBVI:-
const arr= new Array(1,2,3,4);
console.log(arr[2]); //=> 3 obvi

/***************************** ARRAY METHODS *************************  */
//✅ PUSH
console.log(arr.push(5)); //output=> 5  only prints the element that is pushed
console.log(arr); // output=> [1,2,3,4,5]

//✅ POP
//similarly for pop
console.log(arr.pop()); // prints the element that is removed =>5
console.log(arr); // [1,2,3,4]

//✅for adding values at the start of the array ( not optimised in case of large no. of values)

arr.unshift(9);
console.log(arr); //=> [9,1,2,3,4]

//✅to remove this 9
arr.shift();
console.log(arr); //=> [1,2,3,4]

//✅BOOLEAN RESULT INCLUDES
console.log(arr.includes(1)); //output=> true
console.log(arr.includes(-1)); // false

//✅INDEXOF
console.log(arr.indexOf(1)); //output=> 0
console.log(arr.indexOf(0)); //output=> -1 always comes -1 whenever the element is not present in the array

//✅.JOIN()
/*The .join() method in JavaScript converts an array into a string, by joining all elements with a specified separator.*/

//Example 1: Default (comma)
let arr1 = [1, 2, 3];
let result1 = arr.join();  
console.log(result); // "1,2,3"

// Example 2: Custom separator
let arr2 = ['a', 'b', 'c'];
let result2 = arr.join('-');
console.log(result); // "a-b-c"

// Example 3: No separator
let arr3 = ['Hello', 'world'];
let result3 = arr.join('');
console.log(result); // "Helloworld"

//✅*******************************************SLICE & SPLICE************************************* */

//🔪 SLICE() in JavaScript

/*Used to copy part of an array without changing the original array.
Syntax: array.slice(start, end)
start: Index to start from (inclusive)
end: Index to stop at (exclusive)*/

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let someFruits = fruits.slice(1, 4);

console.log(someFruits); // ['banana', 'cherry', 'date']
console.log(fruits);     // ['apple', 'banana', 'cherry', 'date', 'elderberry']


//✂️ SPLICE() in JavaScript

/*Used to change the array by adding or removing items.
Syntax: array.splice(start, deleteCount, item1, item2, ...)

start: Index to start
deleteCount: How many items to remove counting from the "start"(above value of start)
item1, item2...: Optional items to add

*/
//Example of splice() (removing):
let fruits1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let removed = fruits.splice(2, 2);

console.log(removed); // ['cherry', 'date']
console.log(fruits1);  // ['apple', 'banana', 'elderberry']
//Removed 2 items starting from index 2.
//original array changed
//console.log(fruits1.splice(2,2))=> this will print only the elements that are removed

// Example of splice() (adding):
let fruits2 = ['apple', 'banana', 'elderberry'];
fruits.splice(2, 0, 'cherry', 'date');

console.log(fruits2); // ['apple', 'banana', 'cherry', 'date', 'elderberry']
//At index 2, deleted 0 items, and added 'cherry' and 'date'.

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
// extra note : just like in java we do System.out.print("age="+ 23);
//similarly we can do console.log("array=", fruits2)=> array=[apple....]








