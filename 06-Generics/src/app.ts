const students:Array<string>=[]
const stu:string[]=[""]
const emp:object={}
const promise:Promise<string>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello this is Unish")
    },1000)
})

promise.then((data)=>{
    console.log(data.split(" "))
})


function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const data = merge({ name: "unish" }, { email: "unish@gmail.com" });
console.log(data.name);  // This should now work without any errors

interface lengthy{
    length:number
}

// let person1:[string,number];
// person1=["name",2]

function findLength<T extends lengthy,U>(element:T,da:U):[T,string]{
    let discription="There is no Lenght"
    if(element.length===1){
        discription=`The length is 1`
    }
    if(element.length>1){
        discription=`The length is ${element.length}`
    }

    return [element,discription]

}

function getKeyorValue<T extends object,U extends keyof T>(obj1:T,key:U){
return obj1[key]
}
getKeyorValue({name:"unish"},"name")


const data2=findLength("hello","Hello")

interface Books{
    title:string;
    publicedBy:string;
    publicDate:Date;
    numberOfCopy:number;
    
}


function addBooks(title:string,publicedBy:string,publicDate:Date,numberOfCopy:number):Books{
    let addedBook:Partial<Books>={}
    addedBook.title=title
    addedBook.publicedBy=publicedBy
    addedBook.publicDate=publicDate
    addedBook.numberOfCopy=numberOfCopy
    return addedBook  as Books

}