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
        message
      });
      return message;
    },
    deleteMessage: async (_, { _id }) => {
      const message = await Message.remove({ _id });
      pubSub.publish(MESSAGE_DELETED, {
        message
      });
      return message;
    }
  },
  Subscription: {
    messageSent: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([MESSAGE_SENT, MESSAGE_DELETED]),
        ({ message }, { receiver, owner }) =>
          message.receiver === receiver || message.owner === owner
      )
    }
  }
};

module.exports = MessageResolver;
