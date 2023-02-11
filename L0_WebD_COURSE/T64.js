//BUILT IN MODULES IN NODE.JS
//google search 'node js built in modules'


// EXAMPLE
const fs = require("fs");
let text = fs.readFileSync("z node.js.txt","utf-8");
text = text.replace("tab*2","tab,tab");
console.log("THE CONTENT OF THE FILE IS\n");
console.log(text);

fs.writeFileSync("T64.txt",text);