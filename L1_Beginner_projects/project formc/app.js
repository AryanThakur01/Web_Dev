const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
const bodyparser = require('body-parser');
const port = 8000;
const mongoose = require('mongoose');




// EXPRESS RELATED STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());



// PUG RELATED STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



// MONGOOSE RELATED STUFF
main().catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://localhost:27017/projectForms')
}

formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    address: String,
    more: String
})

const kitten = mongoose.model('formc', formSchema);




// ENDPOINTS
app.get('/',(req, res)=>{
    res.status(200).render('form.pug');
})
app.post('/', (req, res)=>{
    var myData = new kitten(req.body)
    myData.save().then(()=>{
        res.send('<script>alert(`Your data has been saved successfylly`)</script>')
    }).catch(()=>{
        res.status(404).send(`<script>alert('Error saving your data')</script>`)
    })
})


// STARTING THE SERVER
app.listen(port, ()=>{
    console.log(`Your server has been activated successfully on the port ${port}`)
})