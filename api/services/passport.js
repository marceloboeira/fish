var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy, 
    GitHubStrategy = require('passport-github').Strategy, 
    FacebookStrategy = require('passport-facebook').Strategy;


function findById(id, cb) {
  User.findOne(id).exec(function (err, user) {
    return cb(err, user);
  });
}
 
function findByUsername(u, cb) {
  User.findOne({username: u}).exec(function (err, user) {
    return cb(err, user);
  });
}    
function findByEmail(e, cb) {
  User.findOne({email: e}).exec(function (err, user) {
    return cb(err, user);
  });
}    

var verifyHandlerLocal = function (username, password, cb) {
    process.nextTick(function () {
      findByUsername(username, function (err, user) {
        if (err) return cb(null, err);
        if (!user) {
          return cb(null, false, {message: 'Unknown credentials'});
        }
        else {
            if (user.verifyPassword(password)) {
                return cb(null, user, {message: 'Ok'});
            }
            else {
                return cb(null, null, {message: 'Invalid Password'});
            } 

        }
      })
    });
}

var verifyHandler = function (token, tokenSecret, profile, cb) {
    process.nextTick(function () {
        if (profile.provider == 'github') {
            findByEmail(profile.emails[0].value, function(err, user){
                if (err) return cb(err);
                if (!user) {
                    if (user.ghId == profile.id){
                        return cb(err,user);
                    }
                    else {
                        user.ghId = profile.id;    
                        user.ghToken = token;
                        user.ghSecret = tokenSecret;
                        user.save();
                        return cb(err,user);
                    }
                }
                else {
                    var data = {
                        name: profile.displayName,
                        username: profile.id,
                        email: profile.emails[0].value,
                        password: profile.id + profile.id,
                        ghId: profile.id,
                        ghToken: token,
                        ghSecret: tokenSecret
                    };
                    
                    User.create(data, function(err, newUser) {
                       return cb(err, newUser);
                    });
                }
            });

        }
        else if (profile.provider == 'facebook') {
            findByEmail(profile.emails[0].value, function(err, user){
                if (err) return cb(err);
                if (!user) {
                    if (user.fbId == profile.id){
                        cb(err,user);
                    }
                    else {
                        user.fbId = profile.id;    
                        user.fbToken = token;
                        user.fbSecret = tokenSecret;
                        user.save();
                        return cb(err,user);
                    }
                }
                else {
                    var data = {
                        name: profile.displayName,
                        username: profile.id,
                        email: profile.emails[0].value,
                        password: profile.id + profile.id,
                        fbId: profile.id,
                        fbToken: token,
                        fbSecret: tokenSecret
                    };
                    
                    User.create(data, function(err, newUser) {
                        return cb(err, newUser);
                    });
                }
            });
        }
    });
};

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (user, cb) {
    cb(null, user);
});

passport.use(new GitHubStrategy(sails.config.passport.github, verifyHandler));
passport.use(new FacebookStrategy(sails.config.passport.facebook, verifyHandler));
passport.use(new LocalStrategy(verifyHandlerLocal));