const express = require('express') //Importar o express
const req = require('express/lib/request')
const res = require('express/lib/response')

const route = express.Router() //criando as rotas 

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req,res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

module.exports = route //exportando a rota!

