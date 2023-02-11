console.log("this is tutorial 53");


//here default value of greetText is passed
function greet(name, greetText = "greetings from java script") {

    name1 = "hello world"; // this is  a local variable
    console.log(greetText + " " + name);
    console.log(`${name} is a good boy`);
}



let name1 = 'Aryan';
let name2 = 'Ajay';
let name3 = 'Ayush';
let name4 = 'Avinash ';
let greetText = 'good morning';
// console.log(`${name1} is a good boy`)
// console.log(`${name2} is a good boy`)
// console.log(`${name3} is a good boy`)

greet(name1);        
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);


function sum(a,b,c){
    let d = a + b + c ; 
    return d;
    // console.log('execut me please')  this is an enreachable and cannot be executed
}

addition = sum(12,23,343);
console.log(addition);