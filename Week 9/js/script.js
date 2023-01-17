alert("Please donot make a noise");
console.log("I am 18 years old");
console.log("Hi i am Sweekar Bajimaya");
console.log(document.getElementById("paragraph").innerHTML)
console.log(typeof document)
document.getElementById("paragraph").innerHTML = "<h1> HELLO </h1>";
document.getElementById("paragraph").style.cssText= "color:white; background:black;";
// document.getElementById("paragraph").style.color= "gold";
// document.getElementById("paragraph").style.background="blue";

const age = 18;
// age = 12;
var age1 = 20;
age1 = 19
let age3 = 30;
age3 = 31
console.log(typeof age);
console.log(typeof age1);
console.log(typeof age3);

var name;
var name = "Sweekar";
console.log(typeof name)

console.log(prompt("Enter a name: "))
document.getElementById("Message").innerHTML = "HELLO" + " " + "My name is:" + " " + name + " " + "i am" + " " + age + " "+ "years old"+ "!";

