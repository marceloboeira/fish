/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

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

  	email:{ 
  		type: 'email',
  		required: true,
      unique: true
  	},

  	password:{
  		type: 'string',
  		required: true,
  		minLength: 6,
  		maxLength: 50
  	},

  	keys: {
      collection: 'key',
      via: 'owner'
    }



  },

  beforeCreate: function (attrs, cb) {
    
  },

  beforeUpdate: function (attrs, cb) {
    // Verify if password attr is present, and crypt it
  },

  setPassword: function (attrs, cb) {
    if (attrs.password != undefined) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) return cb(err);

        bcrypt.hash(attrs.password, salt, function(err, hash) {
          if (err) return cb(err);

          attrs.password = hash;
          cb();
        });
      });
    }
  }

};

