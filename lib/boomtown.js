var Q       = require('q');
var request = require('request');

var URL_ROOT = 'https://api.boomtownroi.com';

function BoomTown(token) {
  this.token = token;
}

BoomTown.prototype.registerLead = function(params){
  var _this = this;
  return Q.promise(function(resolve, reject) {
    request.post({
      url: URL_ROOT + '/lead/register',
      body: params,
      json: true,
      auth: {
        'bearer': _this.token
      }
    }, function(err, response, body) {
      if(err) {
        return reject(err);
      }

      return resolve(body);
    });
  });

};

module.exports = function(params) {

  return Q.promise(function(resolve, reject) {

    // Authenticate
    request.post({
      url: URL_ROOT + '/token',
      body: {
        key: params.key,
        secret: params.secret
      },
      json: true
    }, function(err, response, body) {
      if(err) {
        return reject(err);
      }

      resolve(new BoomTown(body));
    });

  });

};
