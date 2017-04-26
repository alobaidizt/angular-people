

import BaseBusiness = require("./../BaseBusiness");
import IPersonModel = require("./../../model/interfaces/PersonModel");

interface PersonBusiness extends BaseBusiness<IPersonModel> {

}
export = PersonBusiness;
