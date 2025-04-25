var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Serve static files from public directory
app.use(express.static(__dirname + '/public'));

// Serve index.html file on root request
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

