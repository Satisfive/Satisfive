require('dotenv').config();

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL);

var pg = require('pg');

var User = sequelize.define('user', {
  name: Sequelize.STRING,
	personnal_email: Sequelize.STRING,
  company_email: Sequelize.STRING,
  alias_email: Sequelize.STRING,
});

var Email = sequelize.define('email', {
  uuid: Sequelize.STRING,
  analysis: Sequelize.TEXT,
  data: Sequelize.TEXT,
  from: Sequelize.STRING,
  to: Sequelize.STRING,
  subject: Sequelize.STRING,
  body: Sequelize.STRING,
});

module.exports.createUser = function(user) {
  return User.create(user);
};

module.exports.createEmail = function(user) {
  return Email.create(user);
};

module.exports.getEmailByUUID = function(email_uuid) {
  return Email.findOne({ where: { uuid: email_uuid } });
};

module.exports.getUserByEmail = function(email_uuid) {
  return User.findOne({ where: { personnal_email: email_uuid } });
};

User.sync();
Email.sync();

module.exports.User = User
module.exports.Email = Email
