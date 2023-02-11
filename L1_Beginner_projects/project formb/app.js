const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const res = require('express/lib/response');





//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));       // Serving static files 
app.use(express.urlencoded());                      // helps to get the form data from the form pug/html coding


// PUG RELATED STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,`views`))



// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('form.pug')
})
// Mongoose related stuff
main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/projectForms')
}
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    address: String,
    more: String
})

const fm = mongoose.model('formb', formSchema)

app.post('/', (req, res)=>{
    var myData = new fm(req.body)
    myData.save().then(()=>{
        res.status(200).send('<script>alert(`This item has been saved to the directory`)</script>')
    }).catch(()=>{
        res.status(404).send('<script>alert(`Error Recieved`)</script>')
    })
})


// LAUNCH SERVER
app.listen(port, ()=>{
    console.log(`Your server has been activated successfully on the port ${port}`)
})
