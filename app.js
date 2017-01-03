require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const Neo4jApi = require('./neo4j-api');


const app = express();
const db = new Neo4jApi();
const port = process.env.PORT;

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  db.getNodes()
    .then((nodes) => {
      res.render('./home.pug', { nodes });
    })
    .catch(error => res.status(500).send(error));
});

app.post('/', (req, res) => {
  const name = req.body.name;
  db.createNode(name)
    .then(() => res.redirect('/'))
    .catch(error => res.status(500).send(error));
});

app.post('/clear', (req, res) => {
  db.clearNodes()
    .then(() => res.redirect('/'))
    .catch(error => res.status(500).send(error));
});

app.listen(port,
  () => console.log(`Server listening on http://localhost:${port}`));
