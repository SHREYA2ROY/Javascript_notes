console.log("2">1); //OUTPUT=> true 
console.log("1"==1); // true
//non-strict comparison like >, <, >=, <= , == JavaScript tries to convert the string to a number.

console.log(null>0); //output=> false
console.log(null==0); // false
console.log(null>=0); // true

//JavaScript treats null inconsistently depending on the operator:
/* In loosely equality (==) null equals undefined and undefined equals null, and 
Relational operators(<, >, <=, >=)  , null becomes 0 and undefined beomes nan */


console.log(undefined == 0); //false undefined is null here
console.log(undefined > 0); // false undefined is nan here
console.log(undefined < 0); // false same as above

//SPECIAL CASE
console.log(null== undefined); // true

// === 

console.log("2" === 2);// output=> false; strict equality , datatype is checked 
console.log("2" == 2);// output=> true; loose equality, conversion occur