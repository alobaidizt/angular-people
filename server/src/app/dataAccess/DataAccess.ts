

import Mongoose = require("mongoose");
import Constants = require("./../../config/constants/constants");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        var c = new Constants();
        console.log("Connecting to",  c.url);
        this.mongooseInstance = Mongoose.connect( c.url,  c.options); // connect to our database
        //this.mongooseInstance = Mongoose.connect(/*Constants*/ c.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export = DataAccess;
