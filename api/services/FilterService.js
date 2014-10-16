/** 
 * View Filters
 *
 * @see https://github.com/vimia/blew/issues/23
 */
var filters = require('ejs').filters;
var moment = require('moment');
var timeParser = require('parse-duration');
/** 
 * Apply moment.js at server-side as a  filter
 * 
 * @param d - Dirty Date
 * @return 'x days ago' 
 */
filters.dateFromNow = function(d) {
	return moment(d).fromNow();
},

/** 
 * Date component Generator
 * 
 * @param d - Dirty Date
 * @return '<date source="DirtyDate">x days ago</date>' 
 */
filters.dateComponent = function(d) {
	return '<date source="'+ d +'">' + moment(d).fromNow() +'</date>';
},

/** 
 * Create default title
 * 
 * @param a - to Append Title
 * @param t - to Append Title
 * @return nice pageTitle 
 */
filters.pageTitle = function(a, t) {
	return ((t != undefined && t != null) ? (t + " | ") : " ") + a ;
}

/** 
 * Icon component Generator
 * 
 * @param i - Icon name
 * @param c - adicional classes
 * @return '<i class="fa fa-icon another-class"></i>"
 */
filters.iconComponent = function(i, c) {
	return '<i class="fa fa-'+ i + ' ' + c + '"></i>';
}

/** 
 * Time parsing, '1d 4h' => One day and 4 hours => 24 * 60 ...
 * 
 * @see https://github.com/jkroso/parse-duration#api  
 * @param s - String to parse ( -1d + 2h)
 * @return time in ms
 */
filters.durationToMilliseconds = function(s) {
	return timeParser(s);
}

/** 
 * Time parsing, '1d 4h' => One day and 4 hours => 24 * 60 ...
 * 
 * @see https://github.com/jkroso/parse-duration#api  
 * @param d - Date Object to sum
 * @param s - String to parse ( -1d + 2h)
 * @return Date Object + Parsed Time
 */
filters.durationToDate = function(s, d) {
	d = (d !== undefined) ? d : new Date();
	return (new Date(d.getTime() + filters.durationToMilliseconds(s)));
}

// Make Global
module.exports = filters;