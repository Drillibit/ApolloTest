const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  _id: Number,
});

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  favouriteMovies: [movieSchema],
  image: Buffer
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
