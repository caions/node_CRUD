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
app.get('/cad',(req,res)=> res.render('formCad'))
app.get('/edit',(req,res)=> res.render('formEdit'))

 // read
 app.get('/',(req,res)=> usuario.findAll().then((posts)=>{
     res.render('home',{posts:posts})
 }))

 //create
 app.post('/cadastrado',(req,res)=> usuario.create({
     nome: req.body.nome,
     matricula: req.body.matricula
 }).then(()=> res.redirect('/')))
 
//update
app.post('/editado',(req,res)=> usuario.update({
    nome: req.body.nome,
    matricula: req.body.matricula
},{where:{id:req.body.id}}).then(()=> res.redirect('/')))

//delete
app.get('/delete/:id',(req,res)=> usuario.destroy({
    where:{'id': req.params.id}
}).then(()=> res.redirect('/')))

//rodando o servidor
const PORT = 8070
app.listen(PORT,()=>console.log(`Servidor rodando na porta: ${PORT}`))
