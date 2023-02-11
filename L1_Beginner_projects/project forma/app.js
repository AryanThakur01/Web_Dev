const express = require('express');
const app = express();
const fs = require('fs');
const port = 80;
const path = require('path');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");



// remember that you do not forget to start your mongod server or else the program will be 
// MONGOOSE RELATED STUFF
main().catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://localhost:27017/projectForms");
}

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    reason: String,
    describe: String
})
const det = mongoose.model('forma', formSchema);





//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))        //for serving static files
app.use(express.urlencoded())                       //Remember not to forget using this encoding because you have to call the form inputs with provided names

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug')                       //set the template engine as pug
app.set('views', path.join(__dirname, `views`))     //set the views directory


// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('form.pug');
})




app.post('/',(req, res)=>{
    var myData = new det(req.body);
    myData.save().then(()=>{
        res.status(200).send('<script>console.log(alert(`Your data has been saved successfully`));</script>')
    }).catch(()=>{
        res.status(404).send('Error!!   404 cannot be loaded')
    })
    det.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
})




// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
