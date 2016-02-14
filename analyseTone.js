var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: process.env.IBM_USERNAME,
  password: process.env.IBM_PASSWORD,
  version: 'v3-beta',
  version_date: '2016-02-11'
});

// Returns a promise, example:
//
//     analyseTone("Wow, greeeaat!!!!").then(function(e) { console.log(e) })
module.exports.analyseTone = function(text) {
  return new Promise(function(resolve, reject) {
    tone_analyzer.tone({ text: text },
      function(err, tone) {
        if (err)
          reject(err);
        else
          resolve(tone);
    });
  });
};
