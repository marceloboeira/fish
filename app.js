require('newrelic');
// Ensure a "sails" can be located:
var sails;
try {
	sails = require('sails');
} catch (e) {

	return;
}

// Try to get `rc` dependency
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

// Start server
sails.lift(rc('sails'));
