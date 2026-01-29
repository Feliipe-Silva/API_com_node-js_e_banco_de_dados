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
        console.log('Servidor Rodando na porta 8000!');
    })
    .catch((erro) => {
        console.log('Erro no processo de sincronização/criação: ' + erro);
    });

export { Produto };