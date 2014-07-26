/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

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
  }
};

