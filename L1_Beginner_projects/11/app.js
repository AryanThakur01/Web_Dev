const http = require("http")
const fs = require("fs")
const express = require("express")
const app = express()
const path = require("path")
const port = 8000



// EXPRESS RELATED STUFF
app.use("/static", express.static("static"));       //For serving static files



// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory



// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
})
app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});