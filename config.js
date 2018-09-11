/*
 * API-Configuration
 */
var defaultEnv = "staging",
    environments = {
      staging: {
        httpPort: 3000,
        httpsPort: 3001
      },
      production: {
        httpPort: 5000,
        httpsPort: 5001
      }
    };

module.exports = environments[(process.env.NODE_ENV || defaultEnv).toLowerCase()];