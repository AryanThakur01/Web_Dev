// code . use this to open the express directory when you are in express in terminal
const express = require('express');
const app = express();
const path = require('path');
const port = 80 ;


// for serving static file      /static is url      static is folder
app.use("/static",express.static('static'));


// set the template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views',path.join(__dirname, 'views'));

//our pug demo end point
app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there! and thanks for telling me how to use pubg' })
  })





app.get("/",(req,res) =>{
    res.status(200).send("this is HOME PAGE of my first express app with harry");
})

app.get("/about",(req,res) =>{
    res.status(200).send("this is ABOUT PAGE of my first express app with harry");
})

app.post("/about",(req,res) =>{
    res.status(200).send("this is POST of ABOUT PAGE of my first express app with harry");
})

app.get("/this",(req,res)=>{
    res.status(404).send("this page is NOT FOUND")
})




app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
})


// code . to enter the folder in which we want to work