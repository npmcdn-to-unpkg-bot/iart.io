// Load the http module to create an http server.
var http = require('http');
var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

// Configure express to respond with Hello World to all requests.
app.use(express.static('public'));
app.use(redirectUnmatched);

function redirectUnmatched(req, res) {
  if (req.url !== '/')
    res.redirect('/');
}

app.get('/userinfo', function(req, res) {
  var userinfo = {};
  userinfo.name = 'Arthur Tolchinsky';
  userinfo.email = 'arthurtol@gmail.com';
  res.send(userinfo);
});

// app.get('/*.html', function(req, res) {
//   res.redirect('/');
// });

app.get('/resume.html', function(req, res) {
  res.redirect('/');
});

// Listen on port 3000, IP defaults to 127.0.0.1 (localhost)
app.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://localhost:" + port + '/');