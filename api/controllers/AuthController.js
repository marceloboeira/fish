/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 
var passport = require('passport');

module.exports = {
    
  logout: function (req, res) {
    req.logout();
    res.redirect('/?good-bye=true');
  },

  "sign-in": function(req, res) {
    return res.redirect('/');
  },

  "sign-up": function(req, res) {
    return res.redirect('/');
  },
    
  local: function(req, res) {
    passport.authenticate('local', 
        function(err, user, info) {
            if ((err) || (!user)) {
             res.send({message: info.message});
             return res.send(err);

          }
          req.logIn(user, function(err) {
            if (err) res.send(err);
            res.redirect('/dashboard/?p=local');
          });
        })(req, res);
  },

  github: function (req, res) {
    passport.authenticate('github', { failureRedirect: '/auth/error?p=github' },
      function (err, user) {
        req.logIn(user, function (err) {
          if (err) {
            console.log(err);
            return res.serverError(err);
          }
          return res.redirect('/dashboard/?p=github');                 
        });
      })(req, res);
  }
};

