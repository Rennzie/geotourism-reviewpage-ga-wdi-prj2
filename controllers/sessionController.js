const User = require('../models/user');

function sessionNew( req, res ){
  res.render('sessions/new');
}

function sessionCreate( req, res ){
  User
    .findOne({userName: req.body.userName})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        console.log('the password is: ', req.body.password);
        console.log(user);
        console.log('No username or passwords dont match');
        res.status(401).render('sessions/new', {message: 'Try that again'});
      }else{
        console.log(user);
        req.session.userId = user.id;
        res.redirect('/');
      }
    });
}

module.exports = {
  new: sessionNew,
  create: sessionCreate
};
