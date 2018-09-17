const UserType = require('../types/user');

const logOut = {
  type: UserType,
  resolve(_, args, req) {
    const { user } = req;
    req.logout();
    return user;
  }
};

module.exports = logOut;
