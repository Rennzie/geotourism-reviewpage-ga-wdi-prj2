const User = require('../models/user');


//will need to pass the profile the users reviews and followed sites
function userProfileShow ( req, res ){
  User
    .findById(req.params.id)
    .then(user => res.render('userProfile/show', user));

}

module.exports = {
  show: userProfileShow
};
