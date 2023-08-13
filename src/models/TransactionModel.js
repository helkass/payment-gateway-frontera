const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
   {
      order_id: String,
      gross_amount: Number,
      transaction_status: String,
      payment_details: {
         payment_name: { type: String, required: false },
         payment_number: { type: Number, required: false },
      },
      va_number: String,
      expiryAt: String,
   },
   { timestamps: true, expireAfterSeconds: 86400 }
);

module.exports = mongoose.model("transaction", TransactionSchema);
