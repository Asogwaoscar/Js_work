let x = Date();
let y = x.toString();
document.getElementById("date").innerHTML = y;


let dev ={
    name: "Oscar",
    location: "Awka",
    age: "20years",
    stack: "full stack developer",
    exp: "4.5years",
    hobby: "football"
}
document.getElementById("description").innerHTML = "His name is" + " " + dev.name + " " + "from" + " " + dev.location + " "+ "who is" + " " + dev.age +" "+ "of age," + " " + dev.stack + " " + "with" + " " + dev.exp + " " + "of experience" + " " + "and enjoys" + " " + dev.hobby;