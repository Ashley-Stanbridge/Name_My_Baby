var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public'));

// viewed at h  ttp://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var request = require('superagent');

request
  .get('http://www.behindthename.com/api/random.php')
  .end(function(err, res){
    return res
  });

app.listen(8080);
