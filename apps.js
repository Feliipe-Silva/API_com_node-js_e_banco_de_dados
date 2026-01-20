import express from 'express';
import { Produto } from './model/produtos.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/cadastro_produtos', (req, res) => {      // Rota para adicionar 'CREATE'
    console.log("Dados recebidos do Postman:", req.body);

    Produto.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then( function() {
        res.send('Produto cadastrado com sucesso!')
    }).catch( function(erro) {
        res.send('Erro ao cadastrar produtos' + erro)
    })

});

app.get('/consulta', ( req, res ) => {      // Rota de consultas 'READ'
    Produto.findAll().then( function(produtos) {
        res.send( {produtos: produtos} )
    }).catch( (erro) => {
        res.send('ERRO: ' + erro)
    })  // findAll == select * from produtos
});

app.patch('/atualizar/:id', (req, res) => {       // Rota para atualizar 'UPDATE'
    Produto.update(
        {
            'nome': req.body.nome,
            'preco': req.body.preco,
            'descricao': req.body.descricao
        },

        {where: {"id": Number(req.params.id)}}
    ).then( function() {
        res.send('Sucesso ao atulizar os dados!')
    }).catch( function(erro) {
        res.send('Erro ao atualizar os dados:' + erro)
    })
});

app.delete('/deletar/:id', (req, res) => {      //Rotas para exclusão 'DELETE'
    Produto.destroy(
        {where: {"id": req.params.id}}

    ).then( () => { 
        res.send('Produto excluído')
    }).catch( (erro) => { 
        res.send('ERRO:' + erro) 
    })
});


app.listen(8000, () => { console.log('Servidor Rodando na porta 8000!') });