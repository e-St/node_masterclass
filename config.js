/*
 * API-Configuration
 */
var defaultEnv = "staging",
    environments = {
      staging: {
        httpPort: 3000,
      },
      production: {
        httpPort: 5000,
      }
    };

module.exports = environments[(process.env.NODE_ENV || defaultEnv).toLowerCase()];