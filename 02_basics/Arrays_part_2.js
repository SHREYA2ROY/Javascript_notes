const numbers =[1,2,3];
const alpha=['a','b','c'];

// console.log(numbers.push(alpha)); //=> [1,2,3,['a','b','c']]
// here push added alpha array as a single element, this shows that in js, arrays can have element of any type,
//here it stored element of array type 
// we can actually get c from the resultant array => console.log(numbers[3][2])

//********************************************.concat() METHOD**********************************************/

//this method combines two arrays and create a new array 
// To concatenate (combine) arrays, you can use several methods depending on your use case

//✅ 1. Using .concat() method
const newarr= numbers.concat(alpha);
console.log(newarr); //->[ 1, 2, 3, 'a', 'b', 'c' ]

//✅ 2. Using spread operator (...)
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = [...arr1, ...arr2];
console.log(result); // [1, 2, 3, 4]

//✅ 3. Concatenating multiple arrays
const a = [1];
const b = [2];
const c = [3];
const result1= [...a, ...b, ...c];
console.log(result); // [1, 2, 3]

//Or with .concat():
const result3 = a.concat(b, c);

//✅ 4. Concatenating inside a loop(nested arrays)

let result4 = []; //This initializes an empty array called `result`.  It will be used to store the final, concatenated array.   
const arrays = [[1, 2], [3, 4], [5, 6]]; //his defines a constant arrays which contains an array of arrays (a 2D array).It's made up of three inner arrays:

for (const arr of arrays) { //loop through each element in the `arrays` array.  In this case, each element is itself an array: and arr will take each element in each iteration, so in first iteration arr=[1,2] that will go inside the loop and get concatenated with the result array, then arr will take next element ....in this way
  result = result.concat(arr);
}
console.log(result); // [1, 2, 3, 4, 5, 6]

//-------------------------------------------------------------------------------------------------------------
//in nested arrays instead of using loop we can smple use flat
const ar = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const rar = ar.flat(Infinity)
console.log(rar);

//-------------------SOMETHING MORE INTERESTING ARRAY METHODS---------------------------------
console.log(Array.isArray("shreya")); //=> false
console.log(Array.from("shreya"));// => ['s','h','r','e','y','a'] for converting something into array

console.log(Array.from({name:"shreya"})); //[]
/* Why?
Array.from() creates a new array instance from an array-like or iterable object.

However, the object { name: "shreya" } is neither iterable nor array-like in the required way. Here's why:

An array-like object must have a length property (e.g., { length: 3 }) and indexable elements (0, 1, 2, etc.).

{ name: "shreya" } does not have a length property, so Array.from() treats its length as 0.

So it tries to create an array of length 0 and ends up returning an empty array

it works if we convert the above element as object or key-value pair

console.log(Object.values({ name: "shreya" }));
// Output: ["shreya"]

console.log(Object.entries({ name: "shreya" }));
// Output: [["name", "shreya"]]

*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //=> [100,200,300]



