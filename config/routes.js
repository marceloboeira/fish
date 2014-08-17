module.exports.routes = {
  '/': {
    view: 'homepage'
  },
  'get /auth/': {
    controller: 'AuthController',
    action: 'index'
  },
  'post /auth/': {
    controller: 'AuthController',
    action: 'local'
  }
};
