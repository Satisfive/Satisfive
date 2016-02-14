require('dotenv').config();

var express = require('express')
  , http = require('http')
  , sparkpost = require('./sparkpost')
  , db = require('./db')
  , path = require('path');

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
  var email = db.Email.find(req.params.uuid);
  if (email) {
    res.json(email);
  } else {
    res.send(404);
  }
});

app.post('/users', function(req, res){
  var user;
  if (user = db.User.find(req.params.email)) {
    res.send(200);
  } else {
    res.send(400);
  }
});

app.post('/webhook', function(req, res){
  // do sentiment analysis
  var msg = new sparkpost.Message({
      content: {
        subject: 'Hello from node-sparkpost',
        from: "doma@satisfive.doma.io",
        text: JSON.stringify(req.body) + JSON.stringify(req.params) },
  });
  msg.addRecipient("Eli", "eli.sakov@hotmail.com")
  msg.send();
  res.send(200);
});

app.get('/users/:email', function(req, res){
  var user = db.User.find(req.params.email);
  if (user) {
    res.json(user.getEmails());
  } else {
    res.send(404);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
