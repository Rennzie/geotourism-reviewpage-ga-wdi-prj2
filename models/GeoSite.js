const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  rating: { type: Number, default: 0 },
  content: { type: String, required: true },
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  accessibility: String,
  tourGuideAvailability: Boolean,
  title: String
}, { timestamps: true });

reviewSchema.virtual('ratingSymbol')
  .get(function(){
    return getSymbol(this.rating);
  });

reviewSchema.virtual('reviewedSubmitted')
  .get(function(){
    return this.createdAt.getFullYear();
  });

reviewSchema.virtual('daysAgoCreated')
  .get(function(){
    //Get 1 day in milliseconds
    const oneDay=1000*60*60*24;
    const date2 = new Date();

    // Convert both dates to milliseconds
    const date1Ms = this.createdAt.getTime();
    const date2Ms = date2.getTime();

    // Calculate the difference in milliseconds
    const differenceMs = date2Ms - date1Ms;

    // NOTE: YOU CAN FORMAT DEPENDING ON IF > 24 HOURS > 364 DAYS ETC

    // Convert back to days and return
    return Math.round(differenceMs/oneDay);
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

geoSiteSchema.virtual('yearAdded')
  .get(function(){
    return this.createdAt.getFullYear();
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
