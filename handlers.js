/*
 * Handlers
 */
module.exports = {
  notFound: function (_data, cb) {
    cb(404);
  },
  post: {
    hello: function (_data, cb) {
      cb(200, { greeting: "Hello, you POSTed something." });
    }
  }
};