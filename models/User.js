const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const userSchema = new mongoose.schema({
  profilePic: String,
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: {type: String, default: 'user', required: true},  //will user this in future to give moderator and admin permissions
  followedUser: [ { type: String } ],
  followedSites: [ { type: String } ]
});

module.exports = mongoose.model('User', userSchema);
