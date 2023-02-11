const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const pug = require('pug');
const bodyparser = require('body-parser');
const port = 8000;


// EXPRESS RELATED STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());


// PUG RELATED STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
})





// MONGOOSE RELATED STUFF
// main().catch(err => console.log(err));

// async function main(){
//     await mongoose.connect('mongodb://localhost:27017/mySitedb')
// }

// const formSchema = new mongoose.Schema({
//     name: String
// })
// const Kitten = mongoose.model('uploadDoc', formSchema)

// app.post('/', (req, res)=>{
//     var myData = new Kitten(req.body);
//     myData.save().then(()=>{
//         res.send('<script>alert(`Your data has been saved in the backend successfully`)</script>')
//     })
// })



// Launching Server
app.listen(port, ()=>{
    console.log(`The website has been activated on the port ${port}`)
})