const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./src/routes/transaction.routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

//Connect to the database before listening
connectDB().then(() => {
   app.listen(PORT, () => {
      console.log("SERVER RUNNING");
   });
});

// router
app.use("/order", transactionRoutes);
