

import DataAccess = require('../DataAccess');
import IPersonModel = require("./../../model/interfaces/PersonModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class PersonSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            firstName : {
                type: String,
                required: true
            },
            lastName : {
                type: String,
                required: true
            },
            address : {
                type: String,
                required: false
            },
            company : {
                type: String,
                required: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IPersonModel>("People", PersonSchema.schema);
export = schema;""
