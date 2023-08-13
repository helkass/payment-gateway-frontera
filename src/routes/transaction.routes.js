const FApi = require("../controller/transaction.controller");
const router = require("express").Router();

// create transaction
router.post("/createTransaction", FApi.createTransaction);
router.get("/", FApi.getAllTransactions);
router.get("/:order_id", FApi.getTransactionByOrderId);
router.get("/va-number/:va_number", FApi.getTransactionByVaNumber);
router.patch("/pay/:id", FApi.payTransaction);

module.exports = router;
