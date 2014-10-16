/** 
 * CronJobs Setup
 *
 */
var cron = require('cron');
var _ = require('lodash');

module.exports = {

	/** 
   * Init CronService
   *
   */
	init: function() {
		CronService.inject();
		_.forEach(CronService._jobs, function(job, id) {
				job.restart();
		});
	},

	/** 
   * Injecting CronJobs Live time
   *
   */
	inject: function(){
		_.forEach(CronService.jobs, function(job, id) {
				CronService._jobs[id] = cron.job(job.rule, job._); 
		});
	},

	/** 
   * Injecting CronJobs Live time
   *
   * @param id - Job ID
   * @param rule - Job rule
   * @param job - Job itself
   * @param autostart - AutoStart it?
   */
	add: function(id, rule, job, autostart) {
		var c = cron.job(rule, job);
		CronService._jobs[id] = c;
		if (autostart == true) { 
			c.start();
		}
	},

	/** 
	 * Start a cached job by its id
 	 *
	 * @id job id
	 */
	start: function(id) {
		return CronService._jobs[id].start();
	},

	/** 
	 * Stop a cached job by its id
 	 *
	 * @id job id
	 */
	stop: function(id) {
		return CronService._jobs[id].stop();
	},

	/** 
	 * Stop a cached job by its id
 	 *
	 * @id job id
	 */
	restart: function(id) {
		return CronService._jobs[id].restart();
	},

	/** 
	 * Get a cached job by its id
 	 *
	 * @id job id
	 */
	get: function(id) {
		return CronService._jobs[id];
	},

	// Cron Objects Cache
	_jobs: { },
	
	// Default "Global" Jobs
	jobs: {
		"example":{	
			rule: "*/3 * * * * *",
			_: function() {
				console.log("Example cron job");
			}
		}	
	}
}