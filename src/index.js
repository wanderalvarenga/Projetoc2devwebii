const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbPath = 'mongodb://localhost/pessoa';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
const mongo = mongoose.connect(dbPath, options);

mongo.then(() =>{
    console.log('db conectado!');
}).catch(error => console.error(erro.menssage));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT  || 8080;

const hostname = 'localhost';

app.use('/api', routes);
app.get('/', (request,response)=>{
    response.end('tudo ok')
});

app.listen(port, hostname, ()=>{
    console.log(`Servidor rodando no endereço: http://${hostname}:${port}`)
})