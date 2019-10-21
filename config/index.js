const config = {
  production: {
    ENV_CONFIG: '"prod"',
    BASE_API: '"https://server.kooshua.com"'
  },
  development: {
    ENV_CONFIG: '"dev"',
    BASE_API: '"http://localhost:4200"'
  }
}
module.exports = config
