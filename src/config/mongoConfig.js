const mongoose = require("mongoose");

class Db {
   static connect() {
      mongoose
         .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
         .then((e) => {
            const host = e.mongoose.connections.map((d) => d.host);
            console.log(`database connected, host : ${host[0]}`);
         })
         .catch(() => new Error("database cannot connected"));
   }
}

module.exports = Db;
