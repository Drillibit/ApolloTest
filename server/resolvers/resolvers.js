const UserResolver = require('./user');
const MovieResolver = require('./movie');
const MessageResolver = require('./message');

module.exports = [MovieResolver, UserResolver, MessageResolver];
