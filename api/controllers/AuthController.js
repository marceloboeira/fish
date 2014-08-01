/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {

	index: function (req, res) {
        res.view();
    },

    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },
    
    local: function(req, res) {
        
        passport.authenticate('local', function(err, user, info) {
          if ((err) || (!user)) {
            return res.send({message: info.message});
            res.send(err);
          }
          req.logIn(user, function(err) {
            if (err) res.send(err);
            res.redirect('/dashboard/?provider=local');
          });
        })(req, res);
    },

    github: function (req, res) {
        passport.authenticate('github', { failureRedirect: '/auth/error?provider=github' },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/dashboard/?provider=github');
                    return;
                });
            })(req, res);
    },

    facebook: function (req, res) {
        passport.authenticate('facebook', { failureRedirect: '/auth/error?provider=facebook', scope: ['email'] },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/dashboard/?provider=facebook');
                    return;
                });
            })(req, res);
    }
};

