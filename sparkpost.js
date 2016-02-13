'use strict'
var SparkPost = require('sparkpost');
process.env.SPARKPOST_API_KEY = "841cffcc12d2d50dbb571f01432b1d5b8e62d2a5";
var client = new SparkPost(); // uses process.env.SPARKPOST_API_KEY
var from = 'test@' + process.env.SPARKPOST_SANDBOX_DOMAIN; // 'test@sparkpostbox.com'

var txObject = {
	campaign: 'first-mailing',
	from: from,
	subject: 'Hello from node-sparkpost',
	html: '<p>Hello world</p>',
	text: 'Hello world',
	recipients: [
		"eli@datatactics.ml"		
	]
};

var txResponseHandler = function txResponseHandler(err, data) {
	if(err) {
		console.error('ERROR: ', err);
		new Error(err);
	} else {
		console.log('WOOHOO, Transmission accepted by SparkPost!');
		console.log(data);
	}
}; // Simplify sending transmission and response handling using the SparkPost Node SDK Transmission request
//client.transmissions.send(txObject, txResponseHandler);