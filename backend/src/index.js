// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção);
// Body: request.body (Dados para criação ou alteração de um registro);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-rtqow.mongodb.net/week10?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,    
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);