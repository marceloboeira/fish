
module.exports.connections = {

  development: {
    adapter: process.env.DEV_DB_ADAPTER ||  'sails-disk',
  },

  test: {
    adapter: process.env.TEST_DB_ADAPTER ||  'sails-disk',
  },

  staging: {
    adapter: process.env.STAGING_DB_ADAPTER ||  'sails-disk',
    url: process.env.STAGING_DB_URL || 'localhost',
    ssl: process.env.STAGING_DB_SSL || true, 
  },

  production: {
    adapter: process.env.PROD_DB_ADAPTER ||  'sails-disk',
    url: process.env.PROD_DB_URL || 'localhost',
    ssl: process.env.PROD_DB_SSL || true,
  }
};
