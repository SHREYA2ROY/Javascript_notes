/* in any language there are mainly two types of datatypes based on how they are stored and accessed
                 Datatypes
                 /       \
                /         \
            Primitive   Non-Primitive
        (call by value) (call by reference)

Primitive=> 7 types String, Number, Boolearn, null, undefined, Symbol, BigInt
Non-Primitive=> Array, Object, Functions etc 
----------------------------------------------------------------------------------------------------
| Feature          | Primitive  (7 types)                    | Non-Primitive                       |
|------------------|-----------------------------------------|-------------------------------------|
| Examples         | `string`, `number`, `null`, `undefined`,| `object`, `array`, `function`, etc. |
|                  |  `boolean`, `symbol`, `bigint`          |                                     |
| Stored in        | **Stack (directly)**                    | Heap (by reference)                 |
| Accessed as      | **Value**                               | Reference (pointer)                 |
| Copying behavior | Copies the actual value                 | Copies the reference (not data)     |
----------------------------------------------------------------------------------------------------

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail= undefined is also correct both means the same

/*
JavaScript is dynamically typed, You don’t declare variable types explicitly.The type is determined at runtime, not during compilation.
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //OUTPUT=> false 
//Symbol('123') creates a unique value

console.log(id)// => symbol('123')

// const bigNumber = 3456543576654356754n bigInt
/* typeof primitive datatype is according to their type, just in case of null, it is object which is a bug in js

typeof non primitive datatype is object , function gives output as function but that is for distinguishing but that is also of type of object */
