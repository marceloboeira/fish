
var passport = require('passport');

/**
 * Injecting Express middleware
 *
 */

module.exports = {

    http: {
        customMiddleware: function (app) {
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }

};

/**
 * Passport 
 *
 * Setup strategies keys to passport middleware.
 *
 */
module.exports.passport = {

    github: {
        clientID: process.env.GH_ID || 'none' ,
        clientSecret: process.env.GH_SECRET || 'none',
        callbackURL: process.env.GH_CB_URL || "http://localhost:5000/auth/github/callback"
    },

    facebook: {
        clientID: process.env.FB_ID || 'none' ,
        clientSecret: process.env.FB_SECRET || 'none',
        callbackURL: process.env.FB_CB_URL || "http://localhost:5000/auth/facebook/callback"
    }
};