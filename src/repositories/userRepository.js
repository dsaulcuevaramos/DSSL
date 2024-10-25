const CrudRepository = require('../lib/crudRepository');
const user = require('../models/User');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = new UserRepository();