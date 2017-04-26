

import PersonRepository = require("./../repository/PersonRepository");
import IPersonBusiness = require("./interfaces/PersonBusiness");
import IPersonModel = require("./../model/interfaces/PersonModel");
import PersonModel = require("./../model/PersonModel");


class PersonBusiness implements IPersonBusiness {
    private _personRepository: PersonRepository;

    constructor () {
        this._personRepository = new PersonRepository();
    }

    create (item: IPersonModel, callback: (error: any, result: any) => void) {
        this._personRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._personRepository.retrieve(callback);
    }

    update (_id: string, item: IPersonModel, callback: (error: any, result: any) => void) {

        this._personRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._personRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._personRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPersonModel) => void) {
        this._personRepository.findById(_id, callback);
    }

}


Object.seal(PersonBusiness);
export = PersonBusiness;
