const express = require('express') //Iniciado o Express
const route = require('./route')
const path = require('path')

const server = express()//Iniciando o server 

server.set ('view engine', 'ejs') //falando qual é a view 

server.use(express.static("public"))//nosso conteudo statico

server.set ('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))//passando a porta do server