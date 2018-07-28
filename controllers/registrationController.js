const User = require('../models/user');

function registrationNew( req, res ){
  res.render('registrations/new');
}

function registrationCreate( req, res){
  User
    .create( res.body )
    .then( user => {
      console.log('We have created a new user:', user);
      res.redirect('/');
    })
    .catch( () => res.status(500).redirect('/registrations/new'));
}

module.exports = {
  new: registrationNew,
  create: registrationCreate
};
