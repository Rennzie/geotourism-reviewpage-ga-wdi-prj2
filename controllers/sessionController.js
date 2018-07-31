const User = require('../models/user');

function sessionNew( req, res ){
  const prePage = req.headers.referer;
  res.render('sessions/new', { prePage });
}

function sessionCreate( req, res ){
  User
    .findOne({userName: req.body.userName})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        // console.log('the password is: ', req.body.password);
        // console.log('No username or passwords dont match');
        res.status(401).render('sessions/new', {message: 'Try that again'});
      }else{
        const prevPage = req.body.prevPage;
        console.log(prevPage);
        if(prevPage === 'http://localhost:8000/'){
          req.session.userId = user.id;
          res.redirect('/geoSites');
        }else{
          req.session.userId = user.id;
          res.redirect(req.body.prevPage);

        }
      }
    });
}

function sessionDelete( req, res ){
  return req.session.regenerate(() => {  //this gives a brand new cookie
    //req.flash('danger', 'You have been logged out!');
    res.redirect('/');
  });
}

module.exports = {
  new: sessionNew,
  create: sessionCreate,
  delete: sessionDelete
};
