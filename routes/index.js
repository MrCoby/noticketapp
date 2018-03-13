var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
  request('https://data.winnipeg.ca/resource/5ych-i6vf.json?ticket_number=72401246', function(err, response, body){
    res.render('index', { title: 'The No Ticket App',
                        opendata: body });  
  
  //res.render('index', { info: 'Output Data'})
  });
});

//router.use();

module.exports = router;
