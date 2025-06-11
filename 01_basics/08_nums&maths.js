const num= 400;
console.log(400); //output=> 400

const balance = new Number(400);
console.log(balance); //output=> [Number:400]

//same thing , just in 2nd , the object is defined of type Number and with this being said, there will be associated methods with this object too over browser console.
/*-------------------------------------------------------------------------------------------*/

//we can convert the number into string and once it is converted , we can use all string methods as well
console.log(balance.toString()); //output=> simple 400 but now it is of type string
console.log( balance.toString().length)//output=> 3

//for fixing the no. of digits after decimal (used in ecommerce websites)
console.log(balance.toFixed(1)); // output=> 100.0 
//.toPrecision(how many digits to be there in the result decides the round off, asked in interviews)
const num1= 1234.45;
console.log(num1.toPrecision(3)) //output=>1.23e+3
console.log(num1.toPrecision(4)) //output=>1234
console.log(num1.toPrecision(5)) //output=>1234.5
console.log(num1.toPrecision(6)) //output=>1234.49

//for better readability, we use .toLocaleString()
const dig= 100000000 //(cant read the number of 0s at first look)
console.log(dig.toLocaleString()); //output=> 10,00,00,000 if default is indian if not then just do ('en-IN')
console.log(dig.toLocaleString('en-US')); // output=>100,000,000
//for more number methods we can look at the console , min_value,max_value, max_safevalue etc 

/* ****************************************** MATHS ******************************************************* */
//MATHS library comes in default with the javascript

console.log(Math); // we can see all the methods related to this on console
console.log(Math.abs(-4)); // to remove the negative sign, output=> 4
console.log(Math.round(4.6)); // for round off obvi , output=> 5
console.log(Math.ceil(4.2));  // output=> 5 ceil means to round up 🔼
console.log(Math.floor(4.9)); // output=> 3 floor means to round down 🔽
console.log(Math.min(4, 3, 6, 8)); // obvi finding the min out of 4 numbers => 3
console.log(Math.max(4, 3, 6, 8)); // => 8

//+++++++++++++++++++++++++++++++++++++GENERATE RANDOM NUMBERS++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.random()); // output=>0.10812383045043505 (gives number between 0 and 1)
console.log((Math.random()*10)+1); //output=>4.114881802383751(to make it generate number between 1 to 20 thats why we added 1 to not include 0)
console.log(Math.floor(Math.random()*10)+1); // output= 8 ( floor also rounds down to give the lowest random numbers with least difference and also removes the decimal complexitites like earlier)

// now note that above outputs are random numbers changes everytime 

//---------------------------------------- Math.random formula,memorize it------------------------------------

// lets we have a minimum value and a max value (both inclusive) and we want to generate random numbers strictly between them
 const min= 10;
 const max = 20;
 console.log(Math.floor(Math.random() * (max - min + 1)) + min)

 /*

📌 Step-by-Step Breakdown:
1) Math.random()
→ Gives a random number between 0 (inclusive) and 1 (exclusive).

2) Math.random() * (max - min + 1)
   Math.random() * (20 - 10 + 1) → Math.random() * 11 
→ So now you get random numbers from 0 to 10.999 

3) Math.floor(...)
→ Rounds it down to get a whole number between 0 and 10.

4) + min
    0 + 10 → 10  
    1 + 10 → 11  
    ...  
    10 + 10 → 20
→ Shifts the range to be between 10 and 20.

🎯 Final Result:
Returns a random integer from 10 to 20, including both.

 */

