/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

module.exports = {
  
  attributes: {

  	name: {
  		type: 'string',
  		required: true,
  		minLength: 3,
  		maxLength: 30
  	},

  	username: {
  		type: 'string',
  		required: true,
      unique: true,
  		minLength: 3,
  		maxLength: 30
  	},

  	email: { 
  		type: 'email',
  		required: true,
      unique: true
  	},

  	password: {
  		type: 'string',
  		required: true,
  		minLength: 6
  	},

  	keys: {
      collection: 'key',
      via: 'owner'
    },

    active: {
      type: 'boolean',
      required: true,
      defaultsTo: true

    },

    ghId: {
      type: 'string',
      required: false 
    },

    ghToken: {
      type: 'string',
      required: false 
    },

    ghSecret: {
      type: 'string',
      required: false 
    },

    verifyPassword: function (password) {
      return bcrypt.compareSync(password, this.password);
    },

    changePassword: function(newPassword, cb){
      this.newPassword = newPassword;
      this.save(function(err, u) {
        cb(err,u);
      });
    }

  },

  beforeCreate: function (attrs, cb) {
    bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
      attrs.password = hash;
      cb(err);
    });
  },

  beforeUpdate: function (attrs, cb) {
    if(attrs.newPassword){
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return cb(err);

        bcrypt.hash(attrs.newPassword, salt, function(err, crypted) {
          if(err) return cb(err);

          delete attrs.newPassword;
          attrs.password = crypted;
          cb();
        });
      });
    }
    else {
      cb();
    }
  }
};

