const express = require('express');
const app = express();

//PACKAGES
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');

//INTERNAL MODULES
const { PORT, DB_URI } =  require('./config/environments.js');
const router = require('./config/routes');

mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);

// LAYOUTS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', `${__dirname}/views`); //this is the default so not really necessary to include

// STATIC FILES
app.use(express.static(`${__dirname}/public`));

//MIDDLE-WARE
app.use(morgan('dev')); //morgan will log HTTP request info to the console
app.use(bodyParser.urlencoded({extend: true})); //adds req.body



//ROUTER
app.use(router);

// LISTEN
app.listen(PORT, () => console.log(`Listening to Nice Rocks on port ${PORT}`));
