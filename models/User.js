const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  profilePic: String,
  firstName: { type: String },
  surname: { type: String},
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: {type: String, default: 'user'},  //will user this in future to give moderator and admin permissions
  followedUser: [ { type: String } ],
  followedSites: [ { type: String } ]
});

//PASSWORD HASHING

//PASSWORD CONFIRMATION VALIDATION

//Pre validation hooks

//Pre save hooks

module.exports = mongoose.model('User', userSchema);
