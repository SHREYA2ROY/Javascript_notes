//============================DATES===============================================

let myDate= new Date(); //created an instance of date
console.log(myDate);                      //2025-06-11T20:40:08.689Z
console.log(myDate.toString());           //Thu Jun 12 2025 02:10:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());       //Thu Jun 12 2025
console.log(myDate.toISOString());        //2025-06-11T20:40:08.689Z
console.log(myDate.toJSON());             //2025-06-11T20:40:08.689Z
console.log(myDate.toLocaleDateString()); //12/6/2025
console.log(myDate.toLocaleString());     //12/6/2025, 2:10:08 am
console.log(myDate.toLocaleTimeString()); //2:10:08 am


console.log(typeof(myDate)); //object
let hello= Date(); // see line no.3
console.log(typeof(hello)); //string
console.log(hello); // Thu Jun 12 2025 02:15:59 GMT+0530 (India Standard Time) see line 4 and 5

// 📅 new Date(year, monthIndex, day ,[] hour, minute, second, millisecond])
let myCreatedDate = new Date(2023, 0, 23) //output on printing myCreatedDate.toString=> Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// here 0 means, months starts from 0

let CreatedDate = new Date(2023, 0, 23, 5, 3) //output=>Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let myedDate = new Date("2023-01-14"); //output=> Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time) .toString is used

//🕒 Date.now()
//This returns the current time as the number of milliseconds since January 1, 1970, 00:00:00 UTC 
let timeStamp= Date.now() // ouput=> some big milliseconds number from that date till right now

//now for example 
let timesp=console.log(myCreatedDate.getTime());
console.log(timesp); //=> 1674432000000
// 🧠 What does getTime() do?
/* 
 returns the timestamp of the date — the number of milliseconds since the given date
 In this case, it's getting the timestamp for January 23, 2023 (local time).

Useful for:-
Comparing two dates numerically
Storing or transmitting dates as numbers
Date arithmetic (e.g., adding days or calculating durations


*/
//for converting into seconds 
console.log(Math.floor(Date.now()/1000)); //obvi date.now will give millisecond , then divide by 1000 , 
//big number with decimal so we did flooring

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month of the date since month starts from 0 so plus 1
console.log(newDate.getDay()); //getDay() – Returns a number (0–6) 0=sun,1-mon

// `${newDate.getDay()} and the time ` // string interpolation
//==========================================================================================================


// toLocaleString(..., { weekday: "long" }) – Returns the name directly
// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })

let newD = new Date(2023, 0, 23);  // Jan 23, 2023
console.log(newD.toLocaleString('default', {
    weekday: "long"
})); //output=> Monday

/*
🔍 Line-by-line explanation:
1) newDate — a Date object you already created.

2) .toLocaleString(...) — this converts the date into a string based on language and formatting options.

3) 'default' — this means "use the default language/locale of the browser/computer".

4) { weekday: "long" } — this tells it to show the full name of the day (not short like "Mon").


*/