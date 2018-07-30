const GeoSite = require('../models/geoSite');

function geoSiteNew( req, res ){
  res.render('geoSites/new');
}


function geoSiteIndex( req, res ){
  GeoSite
    .find()
    .populate('reviews.reviewedBy')
    .then(geoSites => {
      console.log('The review object is', geoSites[0].reviews);
      res.render('geoSites/index', { geoSites });
    });
}

function geoSiteCreate( req, res ){
  GeoSite
    .create( req.body )
    .then( geoSite => {
      console.log('Added a new Geo Site: ', geoSite);
      res.redirect('/geoSites');
    })
    .catch((err) => res.status(500).send(err));
}


// can we add the user model to the rendered page to look up later?
function geoSiteShow( req, res ){
  const geoSiteId = req.params.id;
  GeoSite
    .findById(geoSiteId)
    .populate('reviews.reviewedBy')
    .then( geoSite =>  res.render('geoSites/show', { geoSite }) );
}

function geoSiteDelete( req, res ){
  GeoSite
    .findByIdAndDelete(req.params.id)
    .then(res.redirect('/geoSites'))
    .catch(err => res.status(404).send(err));
}

module.exports = {
  new: geoSiteNew,
  index: geoSiteIndex,
  create: geoSiteCreate,
  show: geoSiteShow,
  delete: geoSiteDelete
};
