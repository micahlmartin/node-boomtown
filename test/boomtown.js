var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

var boomtown = require('../lib/boomtown');


lab.test('test', function(done) {

  boomtown({
    key: '',
    secret: ''
  }).then(function(client) {
    client.registerLead({
      Email: "micahlmartin@gmail.com",
      FirstName: "Micah",
      LastName: "Martin",
      Phone: "(555) 555-5555",
      Comment: "This lead is awesome",
      PropertyAddress: "123 Main Street, Charleston, SC 29403"
    }).then(function(response) {
      console.log(response);
      done();
    }).fail(function(err) {
      console.log(err);
      done();
    });
  }).fail(function(err) {
    console.log(err);
    done();
  });

});
