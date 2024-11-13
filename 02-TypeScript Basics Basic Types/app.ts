let name1: unknown;
let number1: number;

name1 = "Unish";
name1 = 20;

if (typeof name1 === "number") {
  number1 = name1;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
console.log(generateError("An error occured", 500));

function multiply(num1: number, num2: number): number {
  return num1 * num1;
}

const result = multiply(2, 3);
