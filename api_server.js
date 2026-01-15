import express from 'express';
// const express = require('express');

const app = express();
app.use(express.json());

const users = [];

app.get('/', (req, res) => {    // /usuarios
    res.json(users)
});

app.post('/', (req, res) => {    // /usuarios
    users.push(req.body)
    res.send("Requisito salvo!")
});

// app.listen(3000, () =>{
//     console.log('Servidor rodando!!')
// });

/* 
    1: Tipo de rotas / método HTTP
    2: Endereço EX: www.lojadecalçados.com/usuários 
*/

/*
    Criar API de usuários.

    - Criar usuários.
    - Listar usuários.
    - Editar usuários.
    - Deletar usuários.
*/