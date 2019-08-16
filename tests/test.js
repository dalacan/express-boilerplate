// var request = require('request');


var server = require('../server');
var chai = require("chai");
var chaiHttp = require("chai-http");

var expect = chai.expect;
var should = chai.should();
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return a hello world string', (done) => {
    chai.request(server)
              .get("/")
              .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('hello world');
            done();
              });
  });
});

describe('GET /status', () => {
  it('should return json status', (done) => {
    chai.request(server)
              .get("/status")
              .end((err, res) => {
                console.log("Response: " + res.body)
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property(process.env.npm_package_name);
                res.body[process.env.npm_package_name][0].should.have.property('version')
                res.body[process.env.npm_package_name][0].should.have.property('description')
                res.body[process.env.npm_package_name][0].should.have.property('lastcommitsha')
            done();
              });
  });
});