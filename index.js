console.log('Hello World');

const express = require('express');
const owls = require('./data.js');
const app = express();
const port = 3000;

// app.use(cors());

app.get('/owls', (req, res) => { 

    res.send(owls);
});

app.get('/owls/:id', (req, res) => { 

    const id = Number(req.params.id);

    const owls = owls.find((singleOwl) => singleOwl.id === id);

    res.send(owls);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
