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
    .populate('createdBy')
    .populate('reviews.reviewedBy')
    .then( geoSite =>  res.render('geoSites/show', { geoSite }) );
}

function geoSiteEdit(req, res){
  GeoSite
    .findById(req.params.id)
    .then(geoSite => {
      res.render('geoSites/edit', { geoSite });
    });
}

function geoSiteUpdate( req, res ){
  req.body.images = req.body.images.split(',');
  req.body.rockTypes = req.body.rockTypes.split(',');
  GeoSite
    .findByIdAndUpdate(req.params.id, req.body)
    .then(geoSite => res.redirect(`/geoSites/${geoSite.id}`))
    .catch(err => console.log(err));
}

function geoSiteDelete( req, res ){
  GeoSite
    .findByIdAndDelete(req.params.id, req.body)
    .then(res.redirect('/geoSites'))
    .catch(err => res.status(404).send(err));
}

module.exports = {
  new: geoSiteNew,
  index: geoSiteIndex,
  create: geoSiteCreate,
  show: geoSiteShow,
  edit: geoSiteEdit,
  update: geoSiteUpdate,
  delete: geoSiteDelete
};
