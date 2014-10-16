/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');

module.exports = {
  
  "sign-up": function(req, res) {
    return res.view();
  },

  "sign-up-post": function(req, res) {

    //*** 

    return res.redirect('/');
    
    var data = { name: req.param('name'), 
                 email: req.param('email'), 
                 password: req.param('password') };
    
    User.signUpHandler(data, function(err, message, user){
      if (err || !user) {
        req.flash('danger',message);
        return res.redirect('/auth/sign-up');
      }
      return res.view({ user: user });
    });
  },

  "sign-in": function(req, res) {
    return res.view();
  },

  "sign-out": function (req, res) {
    req.logout();
    return res.redirect('/?good-bye=true');
  },
    
  "sign-in-post": function(req, res) {
    passport.authenticate('local', 
      function(err, user, info) {
        if (err) return res.serverError(err);
        if (!user)
          return res.json({error: true,
                           message: info.message});
        
        req.logIn(user, function(err) {
          if (err) return res.serverError(err); 
          
          return res.json({error: false,
                           message: "Ok!",
                           url: '/dashboard/?p=local'});
          
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

