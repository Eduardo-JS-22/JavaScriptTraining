const express = require('express');
const pessoas = require('./pessoaRoute.js');
const categorias = require('./categoriasRoute.js');
const cursos = require('./cursosRoute.js');

module.exports = app => {
    // app.get('/teste', (req, res) => {
    //     res.status(200).send({ mensagem: 'boas-vindas à API' });
    // });

    app.use(
        express.json(),
        pessoas,
        categorias,
        cursos
    )
}