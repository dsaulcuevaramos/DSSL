const CrudRepository = require('../lib/crudRepository')
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository{
    constructor(){
        super(Rol);
    }

    async findUsersByRol(idRol){
        const [rows] = await this.pool.query(`
            SELECT * FROM rol r INNER JOIN usuario u on
            r.id = u.idRol WHERE r.id = ?`,[idRol]);
        return rows;
    }

}

module.exports = new RolRepository();