type combinable=number|string
function combineInputs(input1:combinable, input2: combinable,resultConversion:"as-number"|"as-text") {
    let result:number|string;

    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion==='as-number') {
        result=+input1 + +input2;
    } else {
        result= input1.toString() + input2.toString();
    }
    return result
}

const conbineAge=combineInputs("30","26","as-number");
const conbineName=combineInputs("Unish","Rai","as-text");
console.log(conbineAge)
console.log(conbineName)
type User={
    name:string;
    class:number;
    age:number;
    address:string
}
const user:User={
    name:"Unish",
    class:12,
    age:20,
    address:"gaighat"
}