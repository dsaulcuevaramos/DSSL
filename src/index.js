require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('!Hola perrillos¡');
});

app.listen(port, ()=>{
   console.log(`servidor se corre en tu cara http://localhost:${port}`); 
});
