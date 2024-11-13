const num1 = 10;
const num2 = 20;
const showResult = true;
let resultPhrase: string;
resultPhrase = "Result is: ";

function add(
  num1: number,
  num2: number,
  showResult: boolean,
  resultPhrase: string
) {
  const result = num1 + num2;
  if (showResult) {
    console.log(resultPhrase + result);
  }
  return num1 + num2;
}
add(num1, num2, showResult, resultPhrase);

type combinable = number | string;
type litraltype = "as-number" | "as string";
function red(a: combinable, b: combinable, result: litraltype) {
  let re;
  if (result === "as string") {
    re = a.toString() + b.toLocaleString();
  } else {
    re = +a + +b;
  }
  return re;
}

type Person = {
  name: string;
  age: number;
  address: string;
  phoneNumber: number;
  gender: string;
};

const person1: Person = {
  name: "Unish",
  age: 18,
  address: "gaighat",
  phoneNumber: 97454,
  gender: "male",
};

function jod(
  a: number,
  b: number,
  cb: (input1: number, input2: number) => void
): number {
  cb(2, 3);
  return a + b;
}

let aau: (
  a: number,
  b: number,
  cb: (input1: number, input2: number) => void
) => number;
aau = jod;
aau(12, 13, (a, b) => {
  console.log("hello", a, b);
});

// console.log(aau);
let userInput: unknown;
let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}
