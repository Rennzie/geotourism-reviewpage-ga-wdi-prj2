const express = require('express');
const router = express();

//CONTROLLER MODULES
const registrationsController = require('../controllers/registrationController');

//GLOBAL ROUTES
router.route('/')
  .get( (req, res) => res.render('pages/home'));

router.route('/about')
  .get( (req, res) => res.render('pages/about'));

router.route('/registration')
  .get(registrationsController.new)
  .post(registrationsController.create);




module.exports = router;
