var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
var Bear = require('./models/bear'); 

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function(req, res){
    res.json({message: 'horray! welcome to the API'});
});

app.use('/api',router);

app.listen(port);

console.log('Magic happens on port '+port);