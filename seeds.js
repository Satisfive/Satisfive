data = require('./data');

data.createUser({
  personnal_email: "dorian@doma.io",
  company_email: "support@doma.io",
  alias_email: "doma@satisfive.doma.io",
  name: "Dorian"
});

data.createUser({
  personnal_email: "john@whatever.io",
  company_email: "support@whatever.io",
  alias_email: "whatever@satisfive.doma.io",
  name: "john"
});

data.createEmail({
  uuid: "fferferfwerfecdcvergre",
  analysis: '{"good": "Yes :)"}',
  from: "john@doe.com",
  to: "doma@satisfive.doma.io",
  body: "Help mmeee",
  subject: "Help?",
  data: "{}"
});

data.createEmail({
  uuid: "ffrfrefsdsdfdf",
  analysis: '{"good": "No :)"}',
  from: "john@weird.com",
  to: "doma@satisfive.doma.io",
  body: "That is good!",
  subject: "Godd",
  data: "{}"
});

