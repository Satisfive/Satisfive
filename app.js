require('dotenv').config();

var express = require('express')
var http = require('http')
var sparkpost = require('./sparkpost')
var data = require('./data')
var seeds = require('./seeds')
var path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/api/emails/:uuid', function(req, res){
  data.getEmailByUUID(req.params.uuid).then(function(email) {
    res.json(email);
  }, () => res.send(404))
});

app.post('/users', function(req, res){
  data.createUser({ email: req.params.email }).then(() => res.send(200), () => res.send(400))
});

app.get('/users', function(req, res) {
  data.User.findAll().then((e) => res.json(e));
});

app.get('/emails', function(req, res) {
  data.Email.findAll().then((e) => res.json(e));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
