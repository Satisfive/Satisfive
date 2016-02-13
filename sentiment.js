require('dotenv').config();
var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: process.env.IBM_USERNAME,
  password: process.env.IBM_PASSWORD,
  version: 'v3-beta',
  version_date: '2016-02-11'
});

tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!' },
  function(err, tone) {
    console.log(tone)
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(tone, null, 2));
});

