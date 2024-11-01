const express = require("express");
const rolService = require("../services/rolServive");

const router = express.Router();

router.get('/', async(req,res)=>{
    const roles = await rolService.getAllRols();
    res.json(roles);
});

router.get('/:id', async(req, res)=>{
    const rol = await rolService.getRolById(req.params.id);
    if(rol){
        res.json(rol);
    }else{
        res.status(404).json({message: "no se ha podido encontrar"});
    } 
});

router.post('/', async(req,res)=>{
    const newrol = await rolService.createRol(req.body);
    res.status(201).json(newrol);
});

router.put('/:id', async(req,res)=>{
    const updateRol = await rolService.updateRol(req.params.id, req.body);
    if(updateRol){
        res.json(updateRol);
    }else{
        res.status(404).json({message: "error al editar"});
    }
});

//LA FUNCION DELETE NO HACE FALTA EL ASYNC Y EL AWAIT SE TRABAJA CON EL ASYNC
router.delete('/:id', (req,res)=>{
    const deleteRol =  rolService.deleteRol(req.params.id);
    if(deleteRol){
        res.status(204).send();
    }else{
        res.status(404).json({message: "error al eliminar"});
    }
});

//funciones extra
router.get('/users/:idRol', async(req,res)=>{
    try {
        const result = await rolService.getUserByRole(req.params.idRol); //ojo este req.params.idRol debe estar con el parametro recibido entre las comillas
        res.json(result);
    } catch (error) {
        if(error,message === 'Rol not found'){
            res.status(404).json({error: error.message});
        }else{
            res.status(500).json({error: error.message});
        }  
    }   
});

module.exports = router;