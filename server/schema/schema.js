const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean
} = graphql;

const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org',
  KEY: '4493befd452f5d5eeea5c9d2de1306a8',
  VERSION: 3,
  IMAGE_BASE: 'https://image.tmdb.org/t/p'
};

const api = axios.create({
  baseURL: `${CONFIG.BASE_URL}/${CONFIG.VERSION}`,
  timeout: 2000,
  params: {
    api_key: CONFIG.KEY,
    language: 'ru-RU'
  }
});

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
    adult: { type: GraphQLBoolean },
    runtime: { type: GraphQLString },
    backdrop_path: { type: GraphQLString },
    belongs_to_collection: { type: BelongsToCollection },
    budget: { type: GraphQLInt },
    overview: { type: GraphQLString },
    popularity: { type: GraphQLInt },
    poster_path: { type: GraphQLString },
    production_companies: {
      type: new GraphQLList(CompaniesType)
    },
    genres: {
      type: new GraphQLList(GenreType)
    },
    release_date: { type: GraphQLString },
    tagline: { type: GraphQLString },
    title: { type: GraphQLString },
    vote_average: { type: GraphQLFloat },
    vote_count: { type: GraphQLInt }
  })
});

const CompaniesType = new GraphQLObjectType({
  name: 'ProductionCompanies',
  description: 'Вот тут у нас компании какбе',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    logo_path: { type: GraphQLString },
    original_country: { type: GraphQLString }
  }
});

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
});

const BelongsToCollection = new GraphQLObjectType({
  name: 'BelongsToCollection',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    backdrop_path: { type: GraphQLString }
  })
});

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then(res => res.data);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.data);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(res => res.data);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${args.id}`)
          .then(res => res.data);
      }
    },
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        console.log('re');
        return api.get(`movie/${args.id}`).then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
