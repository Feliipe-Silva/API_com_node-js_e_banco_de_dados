import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    "produtos",    // Nome da base de dados
    "root",     // Usuário do sistema mysql
    "2580047",  // Senha do sistema
    {
        host: 'localhost',     // servidor 
        dialect: 'mysql' 
    }
);

sequelize.authenticate().then( function(){
    console.log('Banco de dados conectado com sucesso!')
}).catch( function(erro) {
    console.log('Erro: '+ erro)
});

export {
    Sequelize,
    sequelize
};