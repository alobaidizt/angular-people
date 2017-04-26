

class Constants {
    //static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/quickStart"

    DB_CONNECTION_STRING: string; //= process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/quickStart"
    url: string;
    options: any;
    constructor () {
        // for MongoDB by Compose service

       if (process.env.VCAP_SERVICES) {
           console.log(process.env.VCAP_SERVICES);
           var env = JSON.parse(process.env.VCAP_SERVICES);
           if (env['compose-for-mongodb']) {
               var cm = env['compose-for-mongodb'][0].credentials;
	            var mongoDbUrl, mongoDbOptions = {};
	            var mongoDbCredentials = cm; //appEnv.getServiceCreds("mycomposedb").credentials;
	            var ca = [new Buffer(mongoDbCredentials.ca_certificate_base64, 'base64')];
	            mongoDbUrl = mongoDbCredentials.uri;
	            mongoDbOptions = {
	              mongos: {
	                ssl: true,
	                sslValidate: true,
	                sslCA: ca,
	                poolSize: 1,
	                reconnectTries: 1
	              }
	            }
	            this.url = mongoDbUrl;
                this.options = mongoDbOptions;
           }
       }
       else {
           this.url = "mongodb://localhost:27017/quickStart";
           this.options = null;
       }
    }

}

Object.seal(Constants);
export = Constants;
