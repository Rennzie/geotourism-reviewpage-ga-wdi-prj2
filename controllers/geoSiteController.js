const GeoSite = require('../models/geoSite');

function geoSiteNew( req, res ){
  res.render('geoSites/new');
}


function geoSiteIndex( req, res ){
  GeoSite
    .find()
    .then(geoSites => {
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

function geoSiteShow( req, res ){
  const geoSiteId = req.params.id;
  GeoSite
    .findById(geoSiteId)
    .then( geoSite =>  res.render('geoSites/show', { geoSite }) );
}

module.exports = {
  new: geoSiteNew,
  index: geoSiteIndex,
  create: geoSiteCreate,
  show: geoSiteShow
};
