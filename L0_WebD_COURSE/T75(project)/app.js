const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;
const path = require('path');
const bodyparser = require("body-parser")       //npm install body-parser
const mongoose = require('mongoose');           //npm install mongoose



// MONGOOSE RELATED STUFF
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/customerComplaints');
}
const complaintSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    issues: String
})

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   };

const Complaint = mongoose.model('Complaint', complaintSchema);   //each document wil be a          Complaint







//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))        //for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug')                       //set the template engine as pug
app.set('views', path.join(__dirname, `views`))     //set the views directory


// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

// app.post('/', (req, res)=>{
//     name = req.body.name
//     age = req.body.age
//     gender = req.body.gender
//     address = req.body.address
//     more = req.body.more

//     let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
//     fs.writeFileSync('output.txt', outputToWrite)
//     const params = {'message': 'Your form has been submitted successfully'}
//     res.status(200).render('index.pug', params);

// })


app.post('/', (req, res)=>{
    var myData = new Complaint(req.body);
    myData.save().then(()=>{
        res.send('Your issues has been submitted and they will be resolved soon')
    }).catch(()=>{
        res.status(404).send("items were not saved successfully")
    })
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});









//  if you try to run mongo db with the terminal it would not run and to make it work you need to add a new data folder with a db folder contained in it and now you are ready to run the mongod command in the vs code's terminal
