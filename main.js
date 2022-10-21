

// convert a date to number

let x = new Date();
let y = x.toString();
console.log(y);

// create an object (a developer and his details)
let dev = {
    name: "Oscar",
    location: "Awka",
    age: "20years",
    stack: "full stack developer",
    exp: "4.5years",
    hobby: "football",
}
console.log("His name is" + " " + dev.name + " " + "from" + " " + dev.location + " " + "who is" + " " + dev.age + " " + "of age and a" + " " + dev.stack + " " + "with" + " " + dev.exp + " " + "experience and also loves" + " " + dev.hobby);

//Assignment
// a program that displays good when even numbers are inserted


let user = prompt("Enter any number");
if(user%2==0){

    console.log("good")
}
else{
    console.log("not good");
}

// Assignment 
// write a program that sums up two inputs from a user and displays the answer in an alert box

// As a string

var oscar = (e, d);
 var e = prompt("enter a number")
 var d = prompt("enter a number")
var sum = (e) + (d);

alert(sum);

// As a number
var oscar = (u, v);
 var u = prompt("enter a number")
 var v = prompt("enter a number")
var sum = Number (u) + Number (v);

alert(sum);

//Assignment
//write a program to check if the user is an adult or a minor

var age = prompt("please enter your age");

if (age < 1){
    console.log("User is infant")
}

else if (age >= 1 && age <= 17){
    console.log("User is a minor")
}
else{
    console.log("User is an adult")
};