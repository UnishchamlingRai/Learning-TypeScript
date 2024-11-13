function add(num1: number, num2: number): number {
    return num1 + num2;
}

function printResult(num: number):undefined {
    console.log("Result: " + num);
}

printResult(add(2,4))

let combinenumber:(a:number,b:number)=>number;
combinenumber=add
// combinenumber=printResult; wrong

console.log(combinenumber(2,3))


function addAndHandle(n1:number,n2:number,cb:(result:number)=>void){
    const result=n1+n2
    cb(result)
}

addAndHandle(2,3,(result)=>{
    console.log("From callback ",result)
    return;
})