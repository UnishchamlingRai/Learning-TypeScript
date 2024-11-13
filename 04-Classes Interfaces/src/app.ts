interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

const user: Person = {
  name: "unish",
  age: 20,
  greet(phrase: string) {
    console.log(phrase);
  },
};
user.greet("Hello");

class LivingBeings {
  constructor(name: string, age: number) {}
}

interface Animal {
  animalName: string;
  age: number;
}

interface Dog extends Animal {
  dogName: string;
  height: number;
}

let dog1: Dog = {
  animalName: "Dog",
  age: 12,
  dogName: "barbaer",
  height: 1.3,
};
interface PersonInter {
  name: string;
  age: number;
  calAge(birthDate: number): number;
}

class Person implements PersonInter {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  calAge(birthDate: number): number {
    return 2024 - birthDate;
  }
}
const person1 = new Person("Unish", 12);

person1.calAge(2006);
