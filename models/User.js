const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  profilePic: String,
  firstName: { type: String },
  surname: { type: String},
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: {type: String, default: 'user'},  //will user this in future to give moderator and admin permissions
  followedUser: [ { type: String } ],
  followedSites: [ { type: String } ],
  isGeologist: {type: Boolean, default: false}
}, { timestamps: true });

//Hashed password varification
userSchema.methods.validatePassword = function(password){
  //compare the password from the form against the has in the db
  return bcrypt.compareSync(password, this.password);
};

//PASSWORD CONFIRMATION VALIDATION
userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

//Pre validation hooks
userSchema.pre('validation', function(next){
  console.log('Prevalidation hook fired');
  if(this.passwordConfirmation !== this.password){
    console.log('Passwords did not match');
    this.invalidate('passwordConfirmation', 'Does not match');
  }
  next();
});

//Pre save hooks
userSchema.pre('save', function(next){
  console.log('Pre save fired');
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

userSchema.post('save', function(){
  console.log('Password was hashed', this.password);
});

module.exports = mongoose.model('User', userSchema);
