require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const rolController = require('./controllers/rolController');
const app = express();
app.use(express.json());
//app.use('/api/users', userController); //el /api/users sirve para probar en el TC
app.use('/api/rol', rolController);
const PORT = process.env.PORT || 3000;

/*
app.get('/', (req,res)=>{
   res.send("hola mundo");
})
*/

app.listen(PORT, ()=>{
   console.log(`servidor se corre en tu cara http://localhost:${PORT}`); 
});
