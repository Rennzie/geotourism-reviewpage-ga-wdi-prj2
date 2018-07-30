const GeoSite = require('../models/geoSite');

function siteReviewNew( req, res ){
  GeoSite
    .findById(req.params.siteId)
    .then(geoSite => res.render('reviews/new', { geoSite }));
}
//
// function siteReviewCreate ( req, res ){
//   GeoSite
// }

module.exports = {
  new: siteReviewNew
  // create: siteReviewCreate
};
