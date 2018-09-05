const express = require('express');
// const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200
  })
);

app.use(bodyParser.json());

// mongoose
//   .connect(
//     'mongodb://mongo:27017/docker-node-mongo',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(express.static('www'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'www', 'index.html'));
});

const PORT = process.env.PORT || 3000;

console.log(`App running at ${PORT}`);

app.listen(PORT);
