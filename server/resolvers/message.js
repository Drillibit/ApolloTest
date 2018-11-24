const { withFilter } = require('graphql-subscriptions');
const Message = require('../models/message');
const pubSub = require('../subscriptions/index');

const MESSAGE_SENT = 'MESSAGE_SENT';
const MESSAGE_DELETED = 'MESSAGE_DELETED';

const MessageResolver = {
  Query: {
    getMessage: async (_, { _id }) => Message.findById(_id),
    getAllMessages: async (_, { _id }) => Message.find({ owner: _id })
  },
  Mutation: {
    sendMessage: async (_, args) => {
      const message = await Message.create({ ...args });
      pubSub.publish(MESSAGE_SENT, {
        messageSent: message
      });
      return message;
    },
    deleteMessage: async (_, { _id }) => Message.remove({ _id })
  },
  Subscription: {
    messageSent: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([MESSAGE_SENT, MESSAGE_DELETED]),
        ({ messageSent }, { receiver, owner }) =>
          messageSent.receiver === receiver || messageSent.owner === owner
      )
    }
  }
};

module.exports = MessageResolver;
