var data = require("./data");
var signup_email = "signup@satisfive.datatactics.ml";
var domain = "satisfive.datatactics.ml";
var sparkpost = require('./sparkpost');

module.exports.isSignup = function(msg) {
	// checks if a user is signing in
    return msg.rcpt_to == signup_email;
};

module.exports.handleSignup = function(msg, res) {
	// creates a new user for that email
	var company_name = msg.content.subject,
		email = msg.msg_from;

	console.log("new signup from", company_name);

	res.send(200);
	var alias = company_name + "@" + domain; 
	return  data.User.findOrCreate({where: {company_email: email},
	defaults: {
		name: company_name,
		company_email: email,
		personnal_email: "",
		alias_email: alias
	}}).then(function(value){
		if (!value) return;
	    var  msg, thisEmail = "eli.sakov@hotmail.com";
	    msg = new sparkpost.Message({content: {
	      from: 'signedup@satisfive.doma.io',
	      subject: "Thank you for signing up",
	      text: "You may now use your new email at " + alias
	    }});
	    msg.addRecipient("name", email);
	    console.log("sentmail");
	    msg.send();
	});


};