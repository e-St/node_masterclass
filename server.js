/*
 * Common Server
 */
var url = require("url"),
    router = require("./router"),
    fallbackPayload = {};

module.exports = function (req, res) {
  var trimmedPath = url
        .parse(req.url, true)
        .pathname
        .replace(/^\/+|\/+$/g, ""),
      method = req.method.toLowerCase();

  req.on("data", function (_data) {
  });

  req.on("end", function () {
    (router[trimmedPath][method] || "notFound")(undefined, function (statusCode, payload) {
      var returnablePayload;

      statusCode = (typeof statusCode === "number" && (statusCode === statusCode)) ? statusCode : 200;  // check for NaN
      try {
        returnablePayload = JSON.stringify(Object.prototype.toString.call(payload) === "[object Object]" ? payload : fallbackPayload);
      } catch (e) {
        console.log("Could not stringify payload. Returning fallback payload.", e);
      }

      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(returnablePayload);

      console.log("Returning this response:", statusCode, returnablePayload);
    });
  });
};