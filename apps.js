import express from 'express';
import { Produto } from './model/produtos.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/cadastro_produtos', (req, res) => {
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

app.get('/consulta', ( req, res ) => {
    Produto.findAll().then( function(produtos) {
        res.send( {produtos: produtos} )
    }).catch( (erro) => {
        res.send('ERRO: ' + erro)
    })  // findAll == select * from produtos
})


app.listen(8000, () => { console.log('Servidor Rodando na porta 8000!') });