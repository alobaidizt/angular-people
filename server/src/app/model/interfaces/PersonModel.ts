

import mongoose = require("mongoose");

interface PersonModel extends mongoose.Document {
    lastName: string;
    firstName: string;
    address: string;
    company: string;
}

export = PersonModel;
