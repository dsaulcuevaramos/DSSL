const rolRepository = require('../repositories/rolRepository');
//const userRepository = require('../repositories/userRepository');

class RolService {

    getAllRols() {
        return rolRepository.findAll();
    }

    getRolById(id){
        return rolRepository.findById(id);
    }

    createRol(userData){
        return rolRepository.create(userData);
    }

    updateRol(id, userData){
        return rolRepository.update(id,userData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    //extra
    async getUserByRole(idRol){
        const rol = await rolRepository.findById(idRol);
        if(!rol){
            console.log("rol not found");
            return;
        }
        const users = await rolRepository.findUsersByRol(idRol);
        const usersByRol = {
            data: {
                ...rol,
                usuarios: users
            }
        };

        return usersByRol;
    }


}

module.exports = new RolService();