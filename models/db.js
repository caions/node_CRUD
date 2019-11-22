//carregando modulos
const Sequelize = require('sequelize');

//Configurando banco de dados
const sequelize = new Sequelize('crud', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

// Definindo a tabela usuarios
const usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING,
        validate:{
            notEmpty: true
        }
    },
    matricula:{
        type: Sequelize.INTEGER,
        validate:{
            notEmpty: true
        }
    }
})

//usuario.sync({force:true})

//exportando a tabela de usuarios
module.exports = usuario

