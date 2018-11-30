require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = 4000;
const { CONNECTION_STRING } = process.env;

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
