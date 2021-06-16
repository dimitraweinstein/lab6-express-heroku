console.log('Hello World');

const express = require('express');
const owls = require('./data.js');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/owls', (req, res) => { 



    res.json(owls);
    console.log(owls);
});

app.get('/owls/:id', (req, res) => { 

    const owlId = Number(req.params.id);
    const owlsEntity = owls.find((singleOwl) => singleOwl.id === owlId);
    

    res.json(owlsEntity);
});

module.exports = app;