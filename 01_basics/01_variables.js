

console.log("shreya");
// there are one way of declaring variable for constant values but two ways for variable values 
const user="shreya";
var password = 1234;//prefer not to use var because of issue in block scope and functinal scope
let emailId="shreya.in"; //always use let for declaring any variable in javascript
city ="jaipur";

// user = "rashmi";//not allowed
password = 4321;
emailId="rashmi.in";
city="bengaluru";

console.log(password);
console.table([ password, emailId, city]);
//diffference between let and var
//updation is allowed in both let and var the only difference is in declaration and initaialisation
//let works in block scope example
{
    let x=2;
    var y=3;
}
// console.log(x); not allowed error
console.log(y)//allowed


// redeclaration is not there in let within the same scope but allowed outside the scope because outside scope same variable is treated as a new one
//hence avoiding mistake of redefining a variable within the same scope which is already defined and redefining is a mistake
 //example:-
 function hello(){
    let name="shreya";
    //let name="rashmi";//not allowed error
    name="rashmi"; //allowed
 }
  
 let name="hello"; //allowed

 //initialisation aspect that is var if not initialised default is undefined but for let it is stored in temporal dead zone so cant be used before declaration
  console.log(a);
  var a=2;
//   console.log(b);
//   let b=2;//error
/* HOISTING MEANS JavaScript knows that a variable or function exists — even before the line where you wrote it.
console.log(a); var a = 2; OUTPUT= UNDEFINED ,var is hoisted and initialized
console.log(b); let b = 2; OUTPUT=ERROR,let is hoisted but not initialized



*/
let b;
console.log(b); //undefined
  // if no declaration of variable is present like:-
  a=9;
  console.log(a);
  //here a is by default a global variable that is var