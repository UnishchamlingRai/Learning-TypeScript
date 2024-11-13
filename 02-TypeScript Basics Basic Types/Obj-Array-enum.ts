const ADMIN = "ADMIN";
const SUPERADMIN = "SUBPERADMIN";
enum name1 {
  hari,
  ram,
}

const student = name1.hari;
enum role {
  ADMIN,
  DIVER,
}
const personinfo: {
  name: string;
  age: number;
  friends: string[];
  role: role;
} = {
  name: "unish",
  age: 18,
  friends: ["ram", "hari"],
  role: role.ADMIN,
};
// personinfo.role[1] = 3;
console.log(personinfo.name);

const dogs: {
  name: string;
}[] = [
  {
    name: "dog1",
  },
];

let list: string[];

list = ["Unish"];

/*
////OBJECT AND ARRAY//////
const person
:{
    age:number;
    name:string
    address:{
        city:string;
        state:string
    },
    hobbies:string[],
    role:[number,string]
}
={
    name:"Unish",
    age:20,
    address:{
        city:"Kathmandu",
        state:"Bagmati"
    },
    hobbies:["sport","music","travel"],
    role:[0,"admin"]
}
person.role.push("Unish")
console.log(person.role)
// person.role[1]=10
// person.role=[0,"admin","user"]
let students:string[];
students=["Unish","Raj"];

console.log(person.name)
for(let hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase())
}

const admin=0
const readOnly=2
const user=1

*/

////ENUM////
enum Role {
  ADMIN,
  READ_ONLY,
  USER,
}
const person = {
  name: "Unish",
  age: 20,
  address: {
    city: "Kathmandu",
    state: "Bagmati",
  },
  hobbies: ["sport", "music", "travel"],
  role: Role.READ_ONLY,
};

if (person.role === Role.READ_ONLY) {
  console.log(person.role);
}
