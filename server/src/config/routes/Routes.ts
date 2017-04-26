
import express = require('express');
import path = require('path');

import PersonRoutes = require('../routes/PersonRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new PersonRoutes().routes);

        return app;
    }
}
export = Routes;
