require("dotenv").config();
require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
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
app.use("/api/message", protect, messageRoutes);

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5050;
const server = app.listen(PORT, () =>
  console.log(`BACKEND SERVER: `.green.bold, PORT)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  // console.log("connected to Socket.io".green);

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    // console.log(userData.name + " : " + userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room._id);
    // console.log(`${room.chatName.yellow} Has New User: ` + room._id);
  });

  socket.on("new message", (newMessageRecieved) => {
    let chat = newMessageRecieved.chat;

    // if (!chat.users) return console.log("chat.users not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.on("typing", (room) => {
    socket.in(room).emit("typing");
  });
  socket.on("stop typing", (room) => {
    socket.in(room).emit("stop typing");
  });

  socket.off("setup", () => {
    // console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
