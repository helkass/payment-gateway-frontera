class ApiConfig {
   constructor(serverKey = { apiKey: "", apiHost: "" }) {
      this.apiKey = serverKey.apiKey;
      this.apiHost = serverKey.apiHost;
   }

   get() {
      let currentConf = {
         apiKey: this.apiKey,
         apiHost: this.apiHost,
      };
      return currentConf;
   }

   static getBaseUrlApi() {
      return "http://localhost:5002/api";
   }
}

module.exports = ApiConfig;
