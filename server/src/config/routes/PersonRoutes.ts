

import express = require("express");
import PersonController = require("./../../controllers/PersonController");


var router = express.Router();
class PersonRoutes {
    private _personController: PersonController;

    constructor () {
        this._personController = new PersonController();
    }
    get routes () {
        var controller = this._personController;

        router.get("/people", controller.retrieve);
        router.post("/people", controller.create);
        router.put("/people/:_id", controller.update);
        router.get("/people/:_id", controller.findById);
        router.delete("/people/:_id", controller.delete);

        return router;
    }


}

Object.seal(PersonRoutes);
export = PersonRoutes;
