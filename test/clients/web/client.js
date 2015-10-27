var expect = require('chai').expect;
var lodash = require('lodash');

var WebAPIClient = require('../../../lib/clients/web/client');
var deserialize = require('../../../lib/middleware/json');
var facets = require('../../../lib/clients/web/facets');
var isOk = require('../../../lib/middleware/is-ok');

var mockTransport = function(args, cb) {
  cb(args.form.err, args.form.headers, args.form.statusCode, args.form.body);
};


describe('Web API Client', function() {

  it('should accept supplied defaults when present', function() {
    var opts = {
      slackAPIUrl: 'test',
      middleware: [],
      userAgent: 'test'
    };
    var client = new WebAPIClient('test-token', lodash.noop, opts);

    expect(client.slackAPIUrl).to.equal('test');
    expect(client.middleware).to.deep.equal([]);
    expect(client.userAgent).to.equal('test');
  });

  it('should not throw an error when registering an unregistered facet', function() {
    var opts = {facets: [facets.ApiFacet]};
    var client = new WebAPIClient('test-token', lodash.noop, opts);
    var authFacet = new facets.AuthFacet(lodash.noop);
    var fn = function() {
      client.registerFacet(authFacet);
    };
    expect(fn).to.not.throw(Error);
  });

  it('should throw an error when re-registering an registered facet', function() {
    var opts = {facets: [facets.AuthFacet]};
    var client = new WebAPIClient('test-token', lodash.noop, opts);
    var authFacet = new facets.AuthFacet(lodash.noop);
    var fn = function() {
      client.registerFacet(authFacet);
    };
    expect(fn).to.throw(Error);
  });

  it('should create facets and prune the opts.facet object', function() {
    var opts = {facets: [facets.AuthFacet]};
    var client = new WebAPIClient('test-token', lodash.noop, opts);
    expect(client).to.have.property('auth');
  });

  describe('supports different interfaces for returning API responses', function() {
    it('should use promises when usePromises is true', function(done) {
      var args = {
        headers: {},
        statusCode: 200,
        body: 'test'
      };

      var client = new WebAPIClient('test-token', mockTransport, {usePromises: true, middleware: []});

      client.makeAPICall('test', args, null)
        .then(function(res) {
          expect(res).to.equal('test');
          done();
        });
    });

    it('should use callbacks when usePromises is false', function(done) {
      var args = {
        headers: {},
        statusCode: 200,
        body: 'test'
      };

      var client = new WebAPIClient('test-token', mockTransport, {middleware: []});

      client.makeAPICall('test', args, function(err, res) {
        expect(res).to.equal('test');
        done();
      });
    });
  });

});