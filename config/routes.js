const express = require('express');
const router = express();

//CONTROLLER MODULES


//GLOBAL ROUTES
router.route('/')
  .get( (req, res) => res.render('pages/home'));

router.route('/about')
  .get( (req, res) => res.render('pages/about'));






module.exports = router;
