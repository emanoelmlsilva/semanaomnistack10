const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-rtqow.mongodb.net/week10?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,    
})

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção);
// Body: request.body (Dados para criação ou alteração de um registro);

app.post('/users',(request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello World'});
})

app.listen(3333);