/*
 * Router
 */
var handlers = require("./handlers");
module.exports = {
  notFound: handlers.notFound,
  hello: {
    post: handlers.post.hello
  }
};