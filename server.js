//Iniciando o servidor 
const express = require('express');
const server = express()

server.get("/", function(req, res){
  return res.send("Teste")

  
})

server.listen(4000, function(){
  console.log("Server is running!")
})