const express =  require('express');
const userService = require('../services/userService');

const router = express.Router();
//ojo en el package jason cambiar esto por sea caso "mysql2": "^3.11.3"  y "test": "echo \"Error: no test specified\" && exit 1"

router.get('/', async (req, res) =>{
    const users = await userService.getAllUsers();
    res.json(users);
});

router.get('/:id', async (req, res) =>{ //ojo si ese "/" fuera /listar para usar en el tunder client se debe agregar com esta en la URL
    const user = await userService.getUserById(req.params.id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message:'user not found'});
    }
});

router.post('/', async (req,res)=>{
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
});

router.put('/:id', async (req,res)=>{
    const uptadeUser = await userService.updateUser(req.params.id, req.body);
    if(uptadeUser){
        res.json(uptadeUser);
    }else{
        res.status(404).json({message:'user not found'});
    }
});

router.delete('/:id', async (req,res)=>{
    const deleteUser = await userService.deleteUser(req.params.id);
    if(deleteUser){
        res.status(204).send();
    }else{
        res.status(404).json({message:'user not found'});
    }
})

module.exports = router;