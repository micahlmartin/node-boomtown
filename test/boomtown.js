var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

var boomtown = require('../lib/boomtown');


lab.test('test', function(done) {

  boomtown({
    key: '',
    secret: ''
  }).then(function(client) {
    client.registerLead({
      "AgentId": 1,
      "Email":"john.doe@example.com",
      "FirstName":"John",
      "LastName":"Doe",
      "Phone":"(555)555-5555",
      "Comment":"my comment",
      "PropertyAddress":"123 Main St, Charleston, SC 29403",
    }).then(function(response) {
      done();
    }).fail(function(err) {
      done();
    });
  }).fail(function(err) {
    done();
  });

});
