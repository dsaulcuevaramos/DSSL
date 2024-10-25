const express =  require('express');
const service = require('../services/userService');
const userService = require('../services/userService');

const router = express.Router();

router.get('/', async (req, res) =>{
    const users = await userService.getAllUsers();
    res.json(users);
});

router.get('/', async (req, res) =>{
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

router.put('/', async (res,res)=>{
    const uptadeUser = await userService.updateUser(req.params.id, res.body);
    if(uptadeUser){
        req.json(uptadeUser);
    }else{
        res.status(404).json({message:'user not found'});
    }
});

router.delete('/', async (req,res)=>{
    const deleteUser = await userService.deleteUser(req.params.id);
    if(deleteUser){
        req.status(204).send();
    }else{
        res.status(404).json({message:'user not found'});
    }
})

module.exports = router;