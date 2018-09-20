const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  id: Number,
  adult: Boolean,
  runtime: String,
  backdrop_path: String,
  belongs_to_collection: Object,
  budget: Number,
  overview: String,
  popularity: Number,
  poster_path: String,
  production_companies: Array,
  production_countries: Array,
  genres: Array,
  release_date: String,
  tagline: String,
  title: String,
  vote_average: Number,
  vote_count: Number,
  similar: Array,
  video: String
});

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  favouriteMovies: [movieSchema]
});


userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model('users', userSchema);
