var Mongo = {
  emails: {},
  users: {}
};


var Email = function(data){
  this.data = data;
  this.id = Math.floor(Math.random()*1000000000)
};

Email.find = function(email) {
	return Mongo.emails[email];
};

Email.prototype.save = function(){
  Mongo.emails[id]=this;
};



var User = function(email) {
  this.emails = [];
  this.email = email;
};

User.find = function(email) {
	return Mongo.users[email];
};

User.prototype.save = function(){
  Mongo.users[this.email] = this;
} 

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