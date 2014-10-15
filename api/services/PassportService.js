var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy, 
    GitHubStrategy = require('passport-github').Strategy;

/**
 * Find user by id
 * 
 * @param id - User ID
 * @param cb - CallBack function
 * @return Error and/or User itself
 */
function findById(id, cb) {
  User.findOne(id).exec(function (err, user) {
    return cb(err, user);
  });
}

/**
 * Find user by username
 * 
 * @param u - User username
 * @param cb - CallBack function
 * @return Error and/or User itself
 */ 
function findByUsername(u, cb) {
  User.findOne({username: u}).exec(function (err, user) {
    return cb(err, user);
  });
};  

/**
 * Find user by email
 * 
 * @param e - User email
 * @param cb - CallBack function
 * @return Error and/or User itself
 */
function findByEmail(e, cb) {
  User.findOne({email: e}).exec(function (err, user) {
    return cb(err, user);
  });
};   

/**
 * Check the UserPassword
 * 
 * @param user - User itself
 * @param password - Password to check
 * @param cb - CallBack function
 * @return Error, User, Message
 */
function verifyPassword(user, password, cb) {
  return (user.verifyPassword(password))  ? cb(null, user, {message: 'Ok'}) 
                                          : cb(null, null, {message: 'Invalid Password'});
};


/**
 * LocalHandler
 * 
 * @param username - Username or id
 * @param password - Password to check
 * @param cb - CallBack function
 * @return Error, User, callback
 */
var verifyHandlerLocal = function (username, password, cb) {
  process.nextTick(function () {
    findByUsername(username, function (err, user) {
      if (err) return cb(null, err);
      if (user == undefined) {
        findByEmail(username, function(err, user) {
          if (err) return cb(null, err);
          if (user == undefined) {
            return cb(null, null, {message: 'Unknown credentials'});
          }
          console.log(8);
          return verifyPassword(user, password, cb);
        }); 
      }
      else {
        return verifyPassword(user, password, cb);
      }
    })
  });
};

/**
 * Adapters Handler (Github/BitBucket)
 * 
 * @param token - Request token
 * @param tokenSecret - Request secret
 * @param profile - User profile json
 * @param cb - CallBack function
 * @return Error, User, Message
 */
var verifyHandler = function (token, tokenSecret, profile, cb) {
  process.nextTick(function () {
    var provider = profile.provider;
      if (profile.emails !== undefined && profile.emails[0] !== undefined
          && profile.emails[0].value !== undefined) {

        findByEmail(profile.emails[0].value, function(err, user){
          if (err) return cb(err);
          if (user !== undefined) {
            return cb(err,user);
          }
          else {
            var data = {"name": profile.displayName,
                        "username": profile.username,
                        "email": profile.emails[0].value,
                        "password": profile.id};                    
            User.create(data, function(err, newUser) {
              if (err) return cb(err);
                return cb(null, newUser);
              });
          }
        });
      }
      else {
        return cb('No email provided', null);
      }
  });
};


/**
 * Store user id into session
 * 
 * @param user - Logged
 * @param cb - Callback function
 * @return Error, User Id
 */
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});


/**
 * Get user from the DB and store at memory
 * 
 * @param id - User Id
 * @param cb - CallBack function
 * @return Error, User
 */
passport.deserializeUser(function (id, cb) {
  findById(id, function(err, user){
    return cb(err, user);
  });
});


/**
 * Injecting the adapters into Passport.js core
 * 
 */
passport.use(new GitHubStrategy(sails.config.passport.github, verifyHandler));
passport.use(new LocalStrategy(verifyHandlerLocal));