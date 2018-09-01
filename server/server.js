const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200
  })
);

app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('Works!');
});
