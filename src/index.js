const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./routes/transaction.routes");
const dotenv = require("dotenv");
const Db = require("./config/mongoConfig");

dotenv.config();
Db.connect();
const app = express();

const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
   console.log(`server running on port : ${PORT}`);
});

app.get("/api", (req, res) => {
   res.send("Hello payment service frontera");
});

// router
app.use("/api/order", transactionRoutes);
