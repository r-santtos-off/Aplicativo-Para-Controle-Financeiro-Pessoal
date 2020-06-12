const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();


/** MONGOOSE CONECTION */
mongoose.connect('mongodb+srv://analistacode:******@analistacode-oh3nu.mongodb.net/financial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.use(express.json());
server.use(routes);

server.listen(3333);
