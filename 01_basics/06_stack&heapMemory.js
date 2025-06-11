//as we all know primitive datatypes are stored in stacks and non-p in heap

//FOR PRIMITIVE DATATYPE 
//Stored directly in memory.When you assign them to another variable, a copy is made.Changing the new variable does not affect the original.

let myYoutubename= "shreya";
let anothername= myYoutubename;
console.log(anothername); //output=> shreya
 
//now here a copy of myYoutubename's value is stored in the next stack with variable name anothername

anothername="rani"
console.log(myYoutubename); // output=> shreya
console.log(anothername); //output=>rani since anothername is now updated, this shows that values are copied and the original value stored in myYoutubename is not altered 


//---------------------------------------------------------------------------------------------
//NON-PRIMITIVE
let userOne = {
    name:"rama",
    class: 2
}
let userTwo= userOne;

userTwo.name="oscar";
console.log(userOne);
console.log(userTwo);
/* both will give same output
{ name: 'oscar', class: 2 }
{ name: 'oscar', class: 2 }
/*

// Stored as a reference (i.e., memory address).When you assign them to another variable, both variables point to the same reference.Changing the value using one reference does affect the original.  
*/