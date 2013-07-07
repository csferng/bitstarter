var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFile('index.html');
  var buffer = new Buffer(content, "utf-8");
  response.send(buffer.toString());
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
