const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

// EXPRESS RELATED STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded())


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))




// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('home.pug')
})
app.get('/about', (req, res)=>{
    res.status(200).render('about.pug')
})
app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug')
})
// app.post('/', (req, res)=>{

// })




// SERVER STARTING
app.listen(port, ()=>{
    console.log(`Your server has been started on port ${port}`)
})