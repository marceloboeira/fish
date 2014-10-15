require('newrelic');

var sails;
try {
	sails = require('sails');
} catch (e) {

	return;
}

var rc;
try {
	rc = require('rc');
} catch (e0) {
	try {
		rc = require('sails/node_modules/rc');
	} catch (e1) {
		rc = function () { return {}; };
	}
}

sails.lift(rc('sails'));
