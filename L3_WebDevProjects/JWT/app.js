require('dotenv').config()
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');

// error handling
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
// app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

// Start the server
const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening at port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();