/*
 * Primary file for the API
 */

var http = require("http"),
    unifiedServer = require("./server"),
    config = require("./config");

http
  .createServer(function (req, res) {
    unifiedServer(req, res);
  })
  .listen(config.httpPort, function () {
    console.log("The server is listening on http port " + config.httpPort);
  });