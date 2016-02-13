var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: process.env.IBM_USERNAME,
  password: process.env.IBM_PASSWORD,
  version: 'v3-beta',
  version_date: '2016-02-11'
});

module.exports.analyseTone = function(text) {
  tone_analyzer.tone({ text: text },
    function(err, tone) {
      if (err)
        return err;
      else
        return tone;
  });
};
