const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo","root","",{
        host: "localhost",
        dialect: "mysql"
    })
sequelize.authenticate().then(function(){
        console.log("Banco conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao conectar: " + erro)
    })
const agendamento = sequelize.define("agendamento",{
    nome: {
        type: Sequelize.STRING
 },
    endereco:{
        type: Sequelize.STRING
 },
    bairro:{
        type: Sequelize.STRING
 },
    cep:{
        type: Sequelize.STRING
 },
    cidade:{
        type: Sequelize.STRING
 },
    estado:{
        type: Sequelize.STRING
 },
    observacao:{
        type: Sequelize.STRING
 }
})
//agendamento.sync({force: true})
/*agendamento.create({
 nome: "Jeferson R de Lima",
 endereco: "Av Aguia de Haia, 2700",
 bairro: "Jd São Nicolau",
 cep: "08245-230",
 cidade: "São Paulo",
 estado: "SP",
 observacao: "Teste de Aula"
})*/
module.exports = agendamento