
class Rol{

    static tableName = 'rol';

    constructor(id, name, descripcion){
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
    }
    
}
module.exports = Rol;