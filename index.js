const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./src/routes/transaction.routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

mongoose
   .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then((e) => {
      console.log("database connected");
   })
   .catch(() => new Error("database cannot connected"));

const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
   console.log(`server running on port : ${PORT}`);
});

// router
app.use("/api/order", transactionRoutes);
