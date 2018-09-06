const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  passowrd: String,
  favouriteMovies: Array
});

mongoose.model('users', userSchema);
