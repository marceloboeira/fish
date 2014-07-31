var passport = require('passport')
    , GitHubStrategy = require('passport-github').Strategy;


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

var verifyHandler = function (token, tokenSecret, profile, cb) {
    process.nextTick(function () {
        if (profile.provider == 'github') {
            findByEmail(profile.emails[0].value, function(err, user){
                if (err !== null) return cb(err);
                if (user !== undefined) {
                    if (user.ghId == profile.id){
                        cb(err,user);
                    }
                    else {
                        user.ghId = profile.id;    
                        user.ghToken = token;
                        user.ghSecret = tokenSecret;
                        user.save();
                        cb(err,user);
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
                        cb(err, newUser);
                    });
                }
            });

        }
        else if (profile.provider == 'another') {
            console.log(9);
        }
    });
};

passport.serializeUser(function (user, cb) {
    cb(null, user.toJSON());
});

passport.deserializeUser(function (user, cb) {
    findById(user.id,function(err, user) {
        cb(err,user.id);
    });
});

passport.use(new GitHubStrategy(sails.config.passport.github, verifyHandler));