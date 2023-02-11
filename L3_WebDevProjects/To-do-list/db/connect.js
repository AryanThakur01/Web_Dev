const mongoose = require('mongoose');



// const connectionString = '';
// assume pushing your project to github, anybody could take your password and tamper with your database so use dotenv

// ADD .env TO THE GITIGNORE TO BE SAFE OF YOUR PASSWORD



const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => { console.log('CONNECTED TO THE DB...') })
        .catch((err) => console.log(err));
}

// .connect(connectionString, {
// .connect(url, {
// useNewUrlParser: true,
// useCreateIndex:true,
// useFindAndModify:false,
// useUnifiedTopology:true,
// WE DON'T NEED TO USE THIS IN VERSION 6 OF MONGOOSE
// })

// server and database do not work in sync

module.exports = connectDB