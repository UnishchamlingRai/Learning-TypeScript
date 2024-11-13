"use strict";
const stu1 = {
    name: "unish",
    age: 18,
    is18: true,
    // startDate:new Date(),
    books: ["nepali"]
};
function printEmployee(stu1) {
    console.log("Name:", stu1.name);
    if ("startDate" in stu1) {
        console.log("Start Date:", stu1.startDate);
    }
}
printEmployee(stu1);
function runningHorse(animal) {
    switch (animal.type) {
        case "horse":
            console.log("The running Speed of Horse is:", animal.runningSpeed);
            break;
        case "bird":
            console.log("The running Speed of Horse is:", animal.filyingSpeed);
            break;
        default:
            break;
    }
}
runningHorse({ type: "horse", runningSpeed: 200 });
const userDetails = document.getElementsByTagName("h1");
// const userDetails=document.getElementById("h1el")
// const userInput=<HTMLInputElement>document.getElementById("userinfo")
const userInput = document.getElementById("userinfo");
if (userInput) {
    userInput.value = "Hello my name is unish rai";
}
const error = {
    email: "NOt Found",
    password: "Wrong Password"
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(2, 3);
result.split(" ");
