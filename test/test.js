var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe("SAMPLE unit test", function () {
  // #1 should return home page
  it("should return home page", function (done) {
    server
      .get("/")
      .expect("Content-type", /text/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        done();
      });
  });
});
