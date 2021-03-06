var express = require('express');
var app = express();

var config = require('./locations.json');

app.use(express.static('public'))

app.get('/', function (req, res) {
   console.log(config.name + ' ' + config.description);
   res.send('Hello World');


})

app.get('/locations', function (req, res) {
   res.send(config);
})

var server = app.listen(process.env.PORT || 8080, '0.0.0.0', function(err){
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
