const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const compression = require('compression');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const schema = require('./schema/schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const AuthService = require('./services/auth');

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3004',
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
  clear_interval: 900,
  cookie: { maxAge: 2 * 60 * 60 * 1000 },
  store: new MongoStore({
    url: 'mongodb://admin:293344asd@ds161833.mlab.com:61833/addressbook',
    autoReconnect: true
  })
}));

app.use(express.static('www'));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

const UserType = `
  id: ID,
  name: String,
  email: String,
  password: String,
  image: String,
  favouriteMovies: [MovieIdType]
`;

const typeDefs = gql`
  type MovieIdType {
    _id: ID
  },
  type UserType {
    ${UserType}
  },
  type Query {
    hello: String,
    CurrentUser: UserType
  },
  type Mutation {
    logIn(email: String!, password: String!): UserType
  }
`;


const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    CurrentUser: (_, args, req) => {
      return req.user;
    },
  },
  Mutation: {
    logIn: (_, { email, password }, req) => {
      return AuthService.login({
        email, password, req
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log(req);
    return req;
  }
});

server.applyMiddleware({ app });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'www', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
