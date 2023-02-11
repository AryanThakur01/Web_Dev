require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// npm i cors and use this property
// this for cross origin when server and frontend are on different domain
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

//---------------Connecting database----------------
const { connectDB } = require("./db/connect");
//--------------------------------------------------

//---------------Setting Up Routes----------------
const { authenticateUser } = require("./middleware/authentication");
const authRouter = require("./routes/authorize");
const userData = require("./routes/userData");
const orderData = require("./routes/orderData");
app.use("/identity", authRouter);
app.use("/home", authenticateUser, userData);
app.use("/home", authenticateUser, orderData);
//------------------------------------------------

//-------------Error handlers---------------------
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
//------------------------------------------------

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`SERVER IS LISTENING AT PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
