

class Constants {
    url: string;
    options: any;
    constructor () {
        // for MongoDB by Compose service

       if (process.env.VCAP_SERVICES) {
           var env = JSON.parse(process.env.VCAP_SERVICES);
           if (env['compose-for-mongodb']) {
               var cm = env['compose-for-mongodb'][0].credentials;
	            var mongoDbUrl, mongoDbOptions = {};
	            var mongoDbCredentials = cm;
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
