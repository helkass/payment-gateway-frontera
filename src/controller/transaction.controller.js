const TransactionModel = require("../models/TransactionModel");
const uid = require("../utils/generateUid");
/**
 * @param {body} body should have a transaction details and payment method
 * config from apiConfig for middleware transaction
 * createTrsaction POST method
 */

class FApi {
   static async createTransaction(req, res) {
      const { transaction_details, ...rest } = req.body;
      if (!req.body)
         return res
            .status(400)
            .json({ status: false, message: "body request required!" });

      // validate order id
      const validate = await TransactionModel.findOne({
         order_id: transaction_details.order_id,
      });

      if (validate)
         return res
            .status(401)
            .json({ status: false, message: "order id has been used!" });

      const newTransaction = new TransactionModel({
         order_id: transaction_details.order_id,
         gross_amount: transaction_details.gross_amount,
         transaction_status: "pending",
         va_number: uid(),
         expiryAt: new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
         ).toISOString(),
         ...rest,
      });

      try {
         const saved = await newTransaction.save();
         res.status(200).json({ statuc: true, data: saved });
      } catch (error) {
         res.status(405);
      }
   }

   // get All transaction
   static getAllTransactions(req, res) {
      try {
         TransactionModel.find()
            .then((js) => res.status(200).json(js))
            .catch((er) =>
               res
                  .status(400)
                  .json({ status: false, message: "something went wrong!" })
            );
      } catch (error) {
         res.status(500);
      }
   }

   // get transaction by order_id
   static getTransactionByOrderId(req, res) {
      const { order_id } = req.params;

      try {
         TransactionModel.findOne({ order_id })
            .then((js) => res.status(200).json(js))
            .catch((er) =>
               res
                  .status(400)
                  .json({ status: false, message: "something went wrong!" })
            );
      } catch (error) {
         res.status(500);
      }
   }

   /**
    * @param {va_number} va_number for get transaction by va number
    * @desc this method for checking transaction and pay it
    */

   static getTransactionByVaNumber(req, res) {
      const { va_number } = req.params;

      try {
         TransactionModel.findOne({ va_number })
            .then((js) => {
               const { expiryAt, _id } = js;
               const currentDate = new Date(new Date().getTime()).toISOString();

               if (expiryAt < currentDate) {
                  // if expired update transaction_status to expire
                  TransactionModel.findByIdAndUpdate(_id, {
                     transaction_status: "expiry",
                  });
                  return res
                     .status(400)
                     .json({ status: false, message: "transaction expired!" });
               }

               res.status(200).json({ status: true, data: js });
            })
            .catch((er) =>
               res
                  .status(400)
                  .json({ status: false, message: "something went wrong!" })
            );
      } catch (error) {
         res.status(500);
      }
   }

   // payment update transaction_status
   static async payTransaction(req, res) {
      const { gross_amount } = req.body;
      const { id } = req.params;

      // checking id
      const match = await TransactionModel.findById(id);

      if (match) {
         // checking amount should payment
         if (match.gross_amount == gross_amount) {
            TransactionModel.findByIdAndUpdate(
               { _id: id },
               { transaction_status: "settlement" }
            )
               .then((data) =>
                  res
                     .status(202)
                     .json({
                        status: true,
                        message: "successful payment",
                        data,
                     })
               )
               .catch((err) =>
                  res
                     .status(400)
                     .json({ status: false, message: "Failure payment" })
               );
         } else {
            res.status(400).json({
               status: false,
               message: "please amount input same at your transaction!",
            });
         }
      } else {
         res.status(400).json({
            status: false,
            message: "something went wrong!",
         });
      }

      // cheicking match id params
   }
}

module.exports = FApi;
