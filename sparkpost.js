'use strict'
var SparkPost = require('sparkpost');
process.env.SPARKPOST_API_KEY = "841cffcc12d2d50dbb571f01432b1d5b8e62d2a5";
var client = new SparkPost(); // uses process.env.SPARKPOST_API_KEY
var from = 'test@' + process.env.SPARKPOST_SANDBOX_DOMAIN; // 'test@sparkpostbox.com'

var txResponseHandler = function txResponseHandler(err, data) {
	if (err) console.log(err);
};

module.exports.Message = function(settings){
	settings.recipients = [];

	this.settings =   {
		transmissionBody: settings,
	};

	/*
	settings = {
		campaign: 'first-mailing',
		from: from,
		subject: 'Hello from node-sparkpost',
		html: '<p>Hello world</p>',
		text: 'Hello world',
		recipients: [
			"eli@datatactics.ml"		
		]
	};
	*/
};

// Simplify sending transmission and response handling using the SparkPost Node SDK Transmission request

module.exports.Message.prototype.send = function(){
	console.log("sending", JSON.stringify(this.settings));
	client.transmissions.send(this.settings, txResponseHandler);
}

module.exports.Message.prototype.addRecipient = function(name, email){
	this.settings.transmissionBody.recipients.push({ address: { name: name, email: email }});
}

