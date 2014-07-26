

module.exports.connections = {

  development: {
    adapter: procces.env.DEV_DB_ADAPTER || 'sails-disk'
  },

  test: {
    adapter: procces.env.TEST_DB_ADAPTER || 'sails-mongo',
    url: process.env.TEST_DB_URL || 'localhost',
    ssl: true
  },

  production: {
    adapter: procces.env.PROD_DB_ADAPTER || 'sails-mongo',
    url: process.env.PROD_DB_URL || 'localhost',
    ssl: true
  }
};
