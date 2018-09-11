/*
 * Primary file for the API
 */

var http = require("http"),
    https = require("https"),
    fs = require("fs"),
    unifiedServer = require("./server"),
    config = require("./config"),
    httpsServerOptions = {
      key: fs.readFileSync("./https/key.pem"),
      cert: fs.readFileSync("./https/cert.pem")
    },
    httpServer, httpsServer;

(httpServer = http.createServer(function (req, res) {
  unifiedServer(req, res);
}))
.listen(config.httpPort, function () {
  console.log("The server is listening on http port " + config.httpPort);
});

(httpsServer = https.createServer(httpsServerOptions, function (req, res) {
  unifiedServer(req, res);
}))
.listen(config.httpsPort, function () {
  console.log("The server is listening on https port " + config.httpsPort);
});
