const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, default: 0 },
  content: { type: String, required: true },
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  accessibility: String,
  tourGuideAvailability: Boolean
});

const geoSiteSchema = new mongoose.Schema({
  coverPic: {type: String, required: true},
  name: {type: String, required: true},
  country: { type: String, require: true },
  period: String,
  age: Number,
  description: String,
  rockTypes: [ { type: String } ],
  region: String,
  images: [ {type: String } ],
  reviews: [ reviewSchema ],
  createdBy: String,
  mapLink: String
}, { timestamps: true });


module.exports = mongoose.model('GeoSite', geoSiteSchema);
