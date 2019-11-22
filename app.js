//carregando modulos
const express = require('express');
const handlebars  = require('express-handlebars');
const bodyParser = require('body-parser')
const usuario = require('./models/db')
const app = express();

//config
 //express-handlebars
 app.engine('handlebars', handlebars({defaultLayout:'main'}));
 app.set('view engine', 'handlebars');
 //body-parser
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json())

//rotas


//rodando o servidor
const PORT = 8070
app.listen(PORT,()=>console.log(`Servidor rodando na porta: ${PORT}`))
