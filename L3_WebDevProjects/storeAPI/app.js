// dotenv for data security
require('dotenv').config();

// async errors
require('express-async-errors');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const express = require("express");
const app = express();
// ConnectDB
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');


// serving static files
app.use('/static', express.static('static'))

// set view engine as pug
app.set("view engine", "pug")


// middleware
app.use(express.json());

// products route
app.use('/api/v1/products', productsRouter);

// error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 3000
const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.error(error);
    }
}
start();