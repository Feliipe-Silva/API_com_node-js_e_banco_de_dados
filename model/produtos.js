import { sequelize, Sequelize } from './db.js';

const Produto = sequelize.define("produtos", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Produto.sync({ force: false })
    .then(() => {
        console.log('Tabela criada/verificada com sucesso!');
        
        // return Produto.create({
        //     nome: "notebook core i5 124500f",
        //     preco: 1799,
        //     descricao: "Processador potente, dual core"
        // });
    })
    .then(() => {
        console.log('Produto de teste salvo!');
    })
    .catch((erro) => {
        console.log('Erro no processo de sincronização/criação: ' + erro);
    });

export { Produto };