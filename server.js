const express=require('express');
const { Server } = require('http');
const app= express();
app.get('/',(req,res)=>{res.send("conectado correctamente")})
app.listen(8080);
console.log('Server on port 8080')
