module.exports.sockets = {

  onConnect: function(session, socket) {
  },

  onDisconnect: function(session, socket) {
  },
  transports: [
    'websocket',
    'htmlfile',
    'xhr-polling',
    'jsonp-polling'
  ],
  adapter: 'memory',
  authorization: false,
  'backwardsCompatibilityFor0.9SocketClients': false,
  grant3rdPartyCookie: true,
  origins: '*:*',
  heartbeats: true,
  'close timeout': 60,
  'heartbeat timeout': 60,
  'heartbeat interval': 25,
  'polling duration': 20,
  'flash policy port': 10843,
  'destroy buffer size': '10E7',
  'destroy upgrade': true,
  'browser client': true,
  'browser client cache': true,
  'browser client minification': false,
  'browser client etag': false,
  'browser client expires': 315360000,
  'browser client gzip': false,
  'browser client handler': false,
  'match origin protocol': false,
  store: undefined,
  logger: undefined,
  'log level': undefined,
  'log colors': undefined,
  'static': undefined,
  resource: '/socket.io'
};
