const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  rating: { type: Number, default: 0 },
  content: { type: String, required: true },
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  accessibility: String,
  tourGuideAvailability: Boolean
}, { timestamps: true });

reviewSchema.virtual('ratingSymbol')
  .get(function(){

    return getSymbol(this.rating);
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
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  mapLink: String
}, { timestamps: true });


//create a virtual which calculates the average rating for a site.
//  --> reduce the reviews array down to a single Number
geoSiteSchema.virtual('averageRating')
  .get(function(){
    const reviewSum = this.reviews.reduce((accum, review) =>{
      return accum + review.rating;
    }, 0);

    const roundedAverage = (reviewSum/this.reviews.length).toFixed(2);

    return {symbol: getSymbol(roundedAverage), avgRating: roundedAverage};
  });

//format that age to 1000,000,000 become 1Ga
//  --> if > 1billion then age/1billtion return newAge + Ga

geoSiteSchema.virtual('formattedAge')
  .get(function(){
    if(this.age >= 1000000000){
      return `${(this.age/1000000000).toFixed(1)} Ga`;
    }else if(this.age >= 1000000){
      return `${(this.age/1000000).toFixed(1)} Ma`;
    }else if(this.age >= 1000){
      return `${(this.age/1000).toFixed(1)} Ka`;
    }else{
      return `${this.age} Yrs`;
    }
  });




module.exports = mongoose.model('GeoSite', geoSiteSchema);



/////-userful function-///////////

function getSymbol(rating){
  let ratingSymbols = rating;

  if(ratingSymbols >= 5){
    ratingSymbols = '⚒ ⚒ ⚒ ⚒ ⚒';
  }else if(ratingSymbols >= 4){
    ratingSymbols = '⚒ ⚒ ⚒ ⚒';
  }else if(ratingSymbols >= 3){
    ratingSymbols = '⚒ ⚒ ⚒';
  }else if(ratingSymbols >= 2){
    ratingSymbols = '⚒ ⚒';
  }else if(ratingSymbols >= 1){
    ratingSymbols = '⚒';
  }else{
    ratingSymbols = '😨';
  }

  return ratingSymbols;
}
