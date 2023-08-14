const mongoose = require("mongoose");

class Db {
   static connect() {
      mongoose
         .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
         .then((e) => {
            console.log("database connected");
         })
         .catch(() => new Error("database cannot connected"));
   }
}

module.exports = Db;
