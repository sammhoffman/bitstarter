var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var buf = new Buffer(16)


app.get('/', function(request, response) {
 var message = buf.toString(fs.readFileSync('/index.html'))
 response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
