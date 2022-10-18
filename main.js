

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

let person = "oscar";
cloth = 100;
shoe = 200;

total = cloth + shoe;
alert (total);