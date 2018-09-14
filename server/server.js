const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const models = require('./models');
const passportConfig = require('./services/auth');
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

app.use(compression());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:293344asd@ds161833.mlab.com:61833/addressbook',
  { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
// mongoose
//   .connect(
//     'mongodb://mongo:27017/docker-node-mongo',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    url: 'mongodb://admin:293344asd@ds161833.mlab.com:61833/addressbook',
    autoReconnect: true
  })
}));

app.use(express.static('www'));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'www', 'index.html'));
});

const PORT = process.env.PORT || 3000;

console.log(`App running at ${PORT}`);

app.listen(PORT);
