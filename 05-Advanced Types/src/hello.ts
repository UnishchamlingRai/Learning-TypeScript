type emp = {
  name: string;
  department: string;
  salary: number;
};

type admin = {
  name: string;
  role: "main" | "sub";
  address: string;
};

type compine = emp & admin;
type unknownemp = emp | admin;

function printName(emp: unknownemp) {
  console.log();
  if ("address" in admin) {
  }
}

const user: compine = {
  name: "Uniah",
  department: "1",
  salary: 100,
  address: "gaighat",
  role: "main",
};

const selectId = <HTMLInputElement>document.getElementById("hello")!;

const numValue = selectId.value;

function merge<T extends object, U extends object>(obj: T, obj2: U) {
  return Object.assign({}, obj, obj2); // Create a new object
}

const mergedata = merge({ name: "Unish" }, { age: 12 });
console.log(mergedata.name); // This will now work correctly

interface Lengthy {
  length: number;
}
function countDis<T extends Lengthy>(element: T) {
  if (element.length === 1) {
    console.log(`The length is 1`);
  } else if (element.length > 1) {
    console.log("The length is:" + element.length);
  }
}

countDis(["hello"]);

function getKey<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

getKey({ name: "Unish" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getData() {
    return [...this.data];
  }
}
const stringStorage = new DataStorage<string>();
stringStorage.addItem("hello");
stringStorage.addItem(1);

const employes: Readonly<string[]> = ["ram", "hari"];
// employes.push()

interface PersonDetails {
  name: string;
  age: number;
  address: string;
}

function addDetails(name: string, age: number, address: string) {
  const personinfo: Partial<PersonDetails> = {};
  personinfo.name = name;
  personinfo.age = age;
  personinfo.address = address;

  return personinfo as PersonDetails;
}
