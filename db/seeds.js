const mongoose = require('mongoose');
const {DB_URI } = require('../config/environments');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);

const GeoSite = require('../models/geoSite');

GeoSite.collection.drop();

GeoSite
  .create([
    {
      coverPic: 'https://www.ramblersholidays.co.uk/Images/HolidayHeros/75207_cehhero.jpg',
      name: 'Giants Causeway',
      country: 'Ireland',
      images: [],
      age: 6000000,
      mapLink: 'https://www.google.co.uk/maps/place/Giant\'s+Causeway/@55.2406415,-6.5162615,16z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf3228ca019de1fd2!8m2!3d55.2408073!4d-6.5115554'
    },{
      name: 'Stromboli ',
      coverPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DenglerSW-Stromboli-20040928-1230x800.jpg/1200px-DenglerSW-Stromboli-20040928-1230x800.jpg',
      images: [],
      age: 2000,
      country: 'Italy',
      mapLink: 'https://www.google.co.uk/maps/place/Stromboli/@38.7918369,15.1802725,13z/data=!3m1!4b1!4m5!3m4!1s0x1315e560df94b48f:0x8b4bca7c47c14447!8m2!3d38.7925148!4d15.214917'
    },{
      name: 'Barbeton Greenstone Belt',
      coverPic: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/35000/35970/barberton_etm_2001121.jpg',
      images: [],
      age: 3200000000,
      country: 'South Africa',
      mapLink: 'https://www.google.co.uk/maps/place/Barberton,+South+Africa/@-25.7750372,31.0069429,13z/data=!3m1!4b1!4m5!3m4!1s0x1ee8f8741a98c6c5:0x5075e6ff53193066!8m2!3d-25.7752265!4d31.0449768'
    },{
      name: 'Seweweekspoortpas',
      coverPic: 'https://thumbs.dreamstime.com/b/majestic-rocky-redish-mountains-seweweekspoort-pass-south-africa-53842233.jpg',
      images: [],
      age: 400000000,
      country: 'South Africa',
      mapLink: 'https://www.google.co.uk/maps/search/Seweweekspoort+Pass+age/@-33.3999983,21.3824904,14z/data=!3m1!4b1'
    },{
      name: 'Grand Canyon',
      coverPic: 'http://d3ne5s9fv9p81l.cloudfront.net/bf/32/40d/7d3/ab51012fb70754dab039c8.jpg?imageView2/2/format/jpg',
      images: [],
      age: 6000000,
      country: 'United States of America',
      mapLink: 'https://www.google.co.uk/maps/place/Grand+Canyon+National+Park/@36.0871875,-113.964307,8z/data=!3m1!4b1!4m5!3m4!1s0x873312ae759b4d15:0x1f38a9bec9912029!8m2!3d36.1069652!4d-112.1129972'
    },{
      name: 'Yosemite National Park',
      coverPic: 'https://npca.s3.amazonaws.com/images/8730/99686cb0-381a-4232-961a-75eeb04db657-banner.jpg?1445970462',
      images: [],
      age: 130000000,
      country: 'United States of America',
      mapLink: 'https://www.google.co.uk/maps/place/Yosemite+National+Park/@37.8529772,-119.831296,10z/data=!3m1!4b1!4m5!3m4!1s0x8096f09df58aecc5:0x2d249c2ced8003fe!8m2!3d37.8651011!4d-119.5383294'
    },{
      name: 'Ayers Rock',
      coverPic: 'https://parksaustralia.gov.au/uluru/images/home-1.jpg',
      images: [],
      age: 900000000,
      country: 'Australia',
      mapLink: 'https://www.google.co.uk/maps/search/ayers+rock+geological+age/@-25.3456562,131.0196362,14z/data=!3m1!4b1'
    }
  ])
  .then(sites => console.log(`Created ${sites.length}`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
