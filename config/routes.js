const express = require('express');
const router = express();

//CONTROLLER MODULES
const registrationController = require('../controllers/registrationController');

//GLOBAL ROUTES
router.route('/')
  .get( (req, res) => res.render('pages/home'));

router.route('/about')
  .get( (req, res) => res.render('pages/about'));

// router.route('/registration/new')

router.route('/registration/new')
  .get(registrationController.new)
  .post(registrationController.create);




module.exports = router;
