const { v4: uuidv4 } = require("uuid");

function generateUid() {
   let id = uuidv4();

   const r = id.toString().replaceAll("-", "ft");

   return r.slice(0, 15);
}

module.exports = generateUid;
