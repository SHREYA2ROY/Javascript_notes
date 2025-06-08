 //type conversions 
 let a = 123;
 console.log(typeof(a));// output= number with small n
 // console.log(typeof a); is also correct  

 let b="123abs";
 let bConverted= Number(b);
 console.log(bConverted);// NAN not a number

 let c = true;
 let cConverted = Number(c);
 console.log(cConverted);// output= 1, true is converted to 1

// Bonus tip:
//Even though NaN stands for "Not a Number", its type is:
console.log(typeof(NaN)); // output=> number 😄 (weird but true)

let name="rani";
let convertBoolean = Boolean(name);
console.log(convertBoolean);// output => true, non-empty string is converted to true
 
let user= null;
console.log(Boolean(user));// output=> false;

let hello;
console.log(Boolean(hello)); // output => false, undefined is also converted to false

//******************operations ***************************

let value = 3;
let negValue = -value;
console.log(negValue);

//all the arithmetic operations are same as other languages but here iam gonna talk about only one
 console.log(2**3); // this is 2 raised to power 3 so output=8

 // string concatenation
 let name1= "hello";
 let name2= " spacewithshreya ";
 console.log(name1+ name2); // outpute= hello spacewithshreya
 // if name 2= "spacewithshreya" => output = hellospacewithshreya

 //SPECIAL CONDITIONS WITH CONCATENATION
  console.log("1"+2); //output=> 12 how js converted 2 into string and concatenated it
  console.log(1+"2");// 12
  console.log("1"+1 +2)// 112
  //but here
  console.log(1+1+"2"); //22
  /* string is first then every character afterwards is considered string */

  //about postfix and prefix read following doc
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
  