[Vimia](https://site.vimia.cc)/Sails-Core [![Build Status](https://travis-ci.org/vimia/sails-core.svg?branch=master)] (https://travis-ci.org/vimia/sails-core) [![Code Climate](https://codeclimate.com/github/vimia/sails-core.png)](https://codeclimate.com/github/vimia/sails-core) [![Test Coverage](https://codeclimate.com/github/vimia/sails-core/coverage.png)](https://codeclimate.com/github/vimia/sails-core)
=====

The project consists on a Solid and Realiable [Sails :boat:](http://sailsjs.org) Core to start developing complete apps.


## :rocket: Showtime 

We belive that you already installed git, node.js, npm and your favorite database.


#### :one: Installing Sails*

:warning: use sails@0.10.0-rc9 
```bash
$ sudo npm install sails@0.10.0-rc9 -g
```

#### :two: Cloning the project

Lets clone it from this repo: 
```bash
$ git clone https://github.com/vimia/sails-core.git
```
Get in the project folder:
```bash
$ cd sails-core
```

#### :three: Adapting the project to deploy 

In the project folder create a file config/local.js:
```bash
$ touch config/local.js
```
and put this content:

```javascript
module.exports = {
  port: process.env.PORT || 5000,
  environment: process.env.ENV || 'development',
  connections: {		
	  	development: {
		    adapter: 'sails-disk', 
	  	},
	  	test: {
		    adapter: 'your-databse-adapter', 
 			url: 'your-database-url'
	  	}
  }
```

The development adapter already is `sails-disk`, if you'll test only with dev, there's no need for change.

#### :four: Launching
```bash
$ sails lift
```

If everything woks fine, you'll be able to see it running at: [http://localhost:5000](http://localhost:5000)


## :metal: Road Map

* ~~Heroku Deploy~~
* ~~Newrelic~~
* ~~Find out about relations~~
	* ~~1:1~~
	* ~~1:n~~
	* ~~n:n~~
* ~~Local Variables~~
* Test Database Adapters
	* ~~PostGreSQL~~
	* ~~MongoDB~~
	* MySQL	
* TDD -> Mocha/Wolfpack* - Still does't not support sails@0.10.x / Already working on it at the TDD branch
* i18n -> Already working on it at the i18n branch
* Log 
* Mailer
* Services -> CronStyle tasks... 
* Sessions -> Redis
* Security (BluePrint Access)
* Controll access to resources - ACL ? RCL ? 
* Cache 


Get another data input that could be here ? [Open an issue](https://github.com/vimia/sails-core/issues/new/)		

## :coffee: From Developers for Developers
	
Sails Core will be coded to easily integrate several platforms.

## :bar_chart: Stats

Coming soon!

 ### Who uses ?

 * [blew.io](http://blew.io) - Developers tool to share code.

## :octocat: Contributors
	
* @marceloboeira - Software Engineer & Creator	