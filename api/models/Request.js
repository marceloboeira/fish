/**
* Request.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    requester:{
      model:'user',
      required: false // TODO 
    },

  	requestedAt: { 
  		type: 'dateTime',
  		required: true
  	},

  	time: {
  		type: 'integer'
  	},

  	params: {
  		type: 'text'
  	},

  	responseCode: {
  		type: 'integer'
  	},
    
  	responseMessage: {
  		type: 'text'
  	}
  }
};

