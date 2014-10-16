module.exports.bootstrap = function(cb) {
	cb();
 /** 
  * Injecting EJS Filters in the FilterService
  */
  sails.config.http.locals.filters = FilterService;	 
  _.extend(sails.hooks.http.app.locals, sails.config.http.locals);

  /** 
   * Injecting CronJobs
   */
  CronService.init();
};
