// const GeoSite = require('../models/geoSite');

function siteReviewNew( req, res ){
  res.render('/reviews/new');
}


module.exports = {
  new: siteReviewNew
};
