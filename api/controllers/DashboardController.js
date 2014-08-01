/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function(req, res) {

		console.log("Dashboard");
		console.log(req.user);
		res.view();
	}
	
};

