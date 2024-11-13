var num1 = 10;
var num2 = 20;
var showResult = true;
var resultPhrase;
resultPhrase = "Result is: ";
function add(num1, num2, showResult, resultPhrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    return num1 + num2;
}
add(num1, num2, showResult, resultPhrase);
function red(a, b, result) {
    var re;
    if (result === "as string") {
        re = a.toString() + b.toLocaleString();
    }
    else {
        re = +a + +b;
    }
    return re;
}
var person1 = {
    name: "Unish",
    age: 18,
    address: "gaighat",
    phoneNumber: 97454,
    gender: "male",
};
function jod(a, b) {
    return a + b;
}
var aau = jod(2, 3);
console.log(aau);
