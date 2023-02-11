// Routes and express
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
// Connect database
const connectDB = require('./db/connect');
require('dotenv').config();
// Error handling
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// const axios = require('axios');

// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(errorHandlerMiddleware);


// Routes
app
    .use('/api/v1/tasks', tasks)
    .use(notFound);


const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`The server is listening on port ${port}...`);
        })
    }
    catch (error) {
        console.error(error);
    }
}

start();