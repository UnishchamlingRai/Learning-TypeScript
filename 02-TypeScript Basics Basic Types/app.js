var name1;
var number1;
name1 = "Unish";
name1 = 20;
if (typeof name1 === "number") {
    number1 = name1;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError("An error occured", 500));
