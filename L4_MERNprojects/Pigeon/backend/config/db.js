const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DATABASE CONNECTED:\t`.green.bold, connect.connection.host);
  } catch (error) {
    console.log("Error Connecting to the Db", error.message);
    process.exit();
  }
};

module.exports = connectDB;
