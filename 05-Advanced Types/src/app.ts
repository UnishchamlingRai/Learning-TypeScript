interface student {
  name: string;
  age: number;
  is18: boolean;
  books: string[];
}
interface employee {
  name: string;
  startDate: Date;
}

// interface stuAndEmp extends student,employee{}
type stuAndEmp = student | employee;

const stu1: stuAndEmp = {
  name: "unish",
  age: 18,
  is18: true,
  // startDate:new Date(),
  books: ["nepali"],
};

function printEmployee(stu1: stuAndEmp) {
  console.log("Name:", stu1.name);
  if ("startDate" in stu1) {
    console.log("Start Date:", stu1.startDate);
  }
}
printEmployee(stu1);

interface Bird {
  type: "bird";
  filyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function runningHorse(animal: Animal) {
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
const userInput = document.getElementById("userinfo") as HTMLInputElement;
if (userInput) {
  (userInput as HTMLInputElement).value = "Hello my name is unish rai";
}

type combine = string | number;
interface ErrorContainer {
  [props: string]: string;
}

const error: ErrorContainer = {
  email: "NOt Found",
  password: "Wrong Password",
};

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: combine, b: combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add(2, 3);
result.split(" ");

const student: Array<string | number> = ["Ram", "Hari", 1];

const promies: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello my name is Unish");
  }, 1000);
});

promies.then((data) => {
  data.split(" ");
});
