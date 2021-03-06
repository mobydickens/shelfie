require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = 4000;
const { CONNECTION_STRING } = process.env;
const controller = require('./controller.js');

const app = express();

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(port, () => console.log(`Server is running at port ${port}`));
    console.log('db is running')
  }).catch(error => {
    console.log('db request rejected', error);
  })

app.use(bodyParser.json());

app.get('/api/inventory', controller.getAll);
app.get('/api/product/:id', controller.getOne)
app.post('/api/product', controller.create);
app.put('/api/inventory/:id', controller.edit);
app.delete('/api/inventory/:id', controller.delete);