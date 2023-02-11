// Synchronous or blocking: line by line execution

// Asynchronous or non-blocking: it appears like line by line execution not guaranteed. callbacks will fire

const fs = require("fs");
// let text = fs.readFile('T64x.txt',"utf-8", (error,data)=>{
//     console.log(error,data);
// })
let text = fs.readFile('T64.txt',"utf-8", (error,data)=>{
    console.log(error,data);
})
console.log('this is a message');
// when we use asynchronous function then the readFile function works in background and till that time other program will continue
