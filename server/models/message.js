const mongoose = require('mongoose');


const messageSchema = mongoose.model('Message', new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
}));

module.exports = messageSchema;
