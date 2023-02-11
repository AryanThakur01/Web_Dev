require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const { authenticateUser } = require("./middleware/authentication");

app.use(express.json());

// npm i cors and use this property
// this for cross origin when httpServer and frontend are on different domain
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

//------------------------------------------Connecting database----------------------------------------------
const { connectDB } = require("./db/connect");

//------------------------------------------Setting Up Routes-------------------------------------------------
const authRouter = require("./routes/authorize");
const userList = require("./routes/userList");
app.use("/identity", authRouter);
app.use("", authenticateUser, userList);
app.use("/api/chat", authRouter, chatRoutes);
//----------------------------------------Error handlers------------------------------------------------------
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//----------------------------------------Using Socket.io------------------------------------------------------

const port = process.env.PORT || 3000;
console.log("PORTS:");
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`SERVER : ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
