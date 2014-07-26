

module.exports.connections = {

  development: {
    adapter: 'sails-disk'
  },

  test: {
    adapter: 'sails-postgresql',
    url: process.env.DATABASE_URL || 'localhost',
    ssl: true
  },

  production: {
    adapter: 'sails-postgresql',
    url: process.env.DATABASE_URL || 'localhost',
    ssl: true
  }
};
