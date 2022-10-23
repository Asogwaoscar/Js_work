

// // convert a date to number

let x = new Date();
let y = x.toString();
console.log(y);

// // create an object (a developer and his details)
let dev = {
    name: "Oscar",
    location: "Awka",
    age: "20years",
    stack: "full stack developer",
    exp: "4.5years",
    hobby: "football",
}
console.log("His name is" + " " + dev.name + " " + "from" + " " + dev.location + " " + "who is" + " " + dev.age + " " + "of age and a" + " " + dev.stack + " " + "with" + " " + dev.exp + " " + "experience and also loves" + " " + dev.hobby);

// //Assignment
// // a program that displays good when even numbers are inserted


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
 var e = Number(prompt("enter a number"));
 var d = Number(prompt("enter a number"));
var sum = (e) + (d);

alert(sum);



//Assignment
// write a program to check if the user is an adult or a minor

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

//Assignment
//Build a counter App using HTML, CSS,JS & App

let btnAdd = document.getElementById("add");
let btnMinus = document.getElementById("minus");
let btnReset = document.getElementById("reset");

let numContainer = document.getElementById("num");
let value = 0;

btnAdd.onclick = () => {
  document.getElementById("add");
  value++;
  numContainer.innerHTML = value;
};

btnMinus.onclick = () => {
  document.getElementById("minus");
  value--;
  numContainer.innerHTML = value;
};

btnReset.onclick = () => {
  value = 0;
  numContainer.innerHTML = value;
};
