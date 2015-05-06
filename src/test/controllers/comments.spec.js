var request = require("request");
var app = require("../../../app.js").app;
var base_url = "http://localhost:3000/"


describe("Comments", function () {

    afterEach(function() {
        app.close();
    });

    it("should validate response code to comments", function (done) {
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it("should validate the returned body to comments", function (done) {
        request.get(base_url, function(error, response, body) {
            expect(body).toEqual("Root");
            done();
        });
    });

});
