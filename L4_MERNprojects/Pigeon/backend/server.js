require("dotenv").config();
require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const { protect } = require("./middleware/authMiddleware");
const express = require("express");
const app = express();

const connectDb = require("./config/db");
connectDb();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});
app.use("/api/user", userRoutes);
app.use("/api/chat", protect, chatRoutes);

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`BACKEND SERVER: `.green.bold, PORT));
