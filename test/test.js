const request = require('supertest');
const app = require("../ejercicio2.js")

describe("GET /hello", function(){
  it("should return a json", function(done){
    request(app)
    .get('/hello')
    .expect('Content-Type', /json/)
    .expect(200,done)
  });
});

describe("GET /date", function(){
  it("should return a json", function(done){
    request(app)
    .get('/date')
    .expect('Content-Type', /json/)
    .expect(200,done)
  });
});
