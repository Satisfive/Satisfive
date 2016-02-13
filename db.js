var Mongo = {
  emails: {},
  users: {}
};


var Email = function(data){
  this.data = data;
  this.id = Math.floor(Math.random()*1000000000)
  Mongo.emails[id]=this;
};

Email.find = function(email) {
	return Mongo.emails[email];
};

var User = function(email) {
  this.emails = [];
  Mongo.users[email] = this;
};

User.prototype.addEmail = function(email){
  this.emails.push[email];
};

User.prototype.getEmails = function(){
  return this.emails.map(function(email){
    return Mongo.emails[email];
  });
};
module.exports.Email = Email;
module.exports.User = User;