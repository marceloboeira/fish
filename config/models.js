module.exports.models = {
  
  connection: process.env.ENV || 'development',
  migrate: process.env.MIGRATE || 'safe'
};
