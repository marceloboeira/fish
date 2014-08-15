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

  // Used by the HTTP transports. The Socket.IO server buffers HTTP request bodies up to this limit.
  // This limit is not applied to websocket or flashsockets.
  'destroy buffer size': '10E7',

  // Do we need to destroy non-socket.io upgrade requests?
  'destroy upgrade': true,

  // Should Sails/Socket.io serve the `socket.io.js` client?
  // (as well as WebSocketMain.swf for Flash sockets, etc.)
  'browser client': true,

  // Cache the Socket.IO file generation in the memory of the process
  // to speed up the serving of the static files.
  'browser client cache': true,

  // Does Socket.IO need to send a minified build of the static client script?
  'browser client minification': false,

  // Does Socket.IO need to send an ETag header for the static requests?
  'browser client etag': false,

  // Adds a Cache-Control: private, x-gzip-ok="", max-age=31536000 header to static requests,
  // but only if the file is requested with a version number like /socket.io/socket.io.v0.9.9.js.
  'browser client expires': 315360000,

  // Does Socket.IO need to GZIP the static files?
  // This process is only done once and the computed output is stored in memory.
  // So we don't have to spawn a gzip process for each request.
  'browser client gzip': false,

  // Optional override function to serve all static files,
  // including socket.io.js et al.
  // Of the form :: function (req, res) { /* serve files */ }
  'browser client handler': false,

  // Meant to be used when running socket.io behind a proxy.
  // Should be set to true when you want the location handshake to match the protocol of the origin.
  // This fixes issues with terminating the SSL in front of Node
  // and forcing location to think it's wss instead of ws.
  'match origin protocol': false,
  store: undefined,
  logger: undefined,
  'log level': undefined,
  'log colors': undefined,
  'static': undefined,
  resource: '/socket.io'
};
