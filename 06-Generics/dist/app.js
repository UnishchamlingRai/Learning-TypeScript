"use strict";
const students = [];
const stu = [""];
const emp = {};
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello this is Unish");
    }, 1000);
});
promise.then((data) => {
    console.log(data.split(" "));
});
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const data = merge({ name: "unish" }, { email: "unish@gmail.com" });
console.log(data.name); // This should now work without any errors
// let person1:[string,number];
// person1=["name",2]
function findLength(element, da) {
    let discription = "There is no Lenght";
    if (element.length === 1) {
        discription = `The length is 1`;
    }
    if (element.length > 1) {
        discription = `The length is ${element.length}`;
    }
    return [element, discription];
}
function getKeyorValue(obj1, key) {
    return obj1[key];
}
getKeyorValue({ name: "unish" }, "name");
const data2 = findLength("hello", "Hello");
function addBooks(title, publicedBy, publicDate, numberOfCopy) {
    let addedBook = {};
    addedBook.title = title;
    addedBook.publicedBy = publicedBy;
    addedBook.publicDate = publicDate;
    addedBook.numberOfCopy = numberOfCopy;
    return addedBook;
}
