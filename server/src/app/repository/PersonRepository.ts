

import PersonModel = require("./../model/PersonModel");
import IPersonModel = require("./../model/interfaces/PersonModel");
import PersonSchema = require("./../dataAccess/schemas/PersonSchema");
import RepositoryBase = require("./BaseRepository");

class PersonRepository  extends RepositoryBase<IPersonModel> {
    constructor () {
        super(PersonSchema);
    }
}

Object.seal(PersonRepository);
export = PersonRepository;
