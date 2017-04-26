

import IPersonModel = require('./interfaces/PersonModel');

class PersonModel {

    private _personModel: IPersonModel;

    constructor(personModel: IPersonModel) {
        this._personModel = personModel;
    }

    get lastName(): string {
        return this._personModel.lastName;
    }

    get fistName(): string {
        return this._personModel.firstName;
    }

    get address(): string {
        return this._personModel.address;
    }

    get company(): string {
        return this._personModel.company;
    }


}
Object.seal(PersonModel);
export =  PersonModel;
