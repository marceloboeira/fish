/**
* Key.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  attributes: {

    owner:{
      model:'user',
      required: true
    },
  	
    token: {
  		type: 'string',
      required: true,
      unique: true
  	},
  	
    secret: {
  		type: 'string',
      required: true
  	},
    
    active:{
      type: 'boolean',
      required: true,
      defaultsTo: false  
    }
    
  }
};

