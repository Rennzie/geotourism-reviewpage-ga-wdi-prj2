const express = require('express');
const router = express();

//CONTROLLER MODULES
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');
const geoSiteController = require('../controllers/geoSiteController');
const reviewController = require('../controllers/reviewController');

//GLOBAL ROUTES
router.route('/')
  .get( (req, res) => res.render('pages/home'));

router.route('/about')
  .get( (req, res) => res.render('pages/about'));

//  --> Registrations
router.route('/registration/new')
  .get(registrationController.new);

router.route('/registration')
  .post(registrationController.create);

//  --> Sessions
router.route('/session/new')
  .get(sessionController.new);

router.route('/session')
  .post(sessionController.create);     //to create a new user cookie

router.route('/session/delete')
  .get(sessionController.delete); //to regenerate a cookie

//  --> GeoSites
router.route('/geoSites')
  .get(geoSiteController.index)
  .post(geoSiteController.create);

router.route('/geoSites/new')
  .get(geoSiteController.new);

router.route('/geoSites/:id')
  .get(geoSiteController.show);

//  --> Site Reviews
router.route('siteReviews/new')
  .get(reviewController.new);




module.exports = router;
