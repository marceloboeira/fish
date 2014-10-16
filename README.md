[Vimia](http://github.com/vimia/sails-core)/Sails-Core
=====

The project consists on a Solid and Realiable [Sails :boat:](http://sailsjs.org) Core to start developing complete apps.

> ######:construction: Warning: DO NOT use in production.
> The project still under development, we hope to release a stable version soon. 


## :rocket: Showtime 

We belive that you already installed git, node.js, npm and your favorite database.


#### :one: Installing Sails*

```bash
$ sudo npm install sails -g
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
  port: 5000,
  environment: 'development',
  globals:{
    baseUrl: 'http://localhost:5000',
    baseHost: 'localhost:5000',
  },
  connections: {
    development: {
      adapter: 'sails-disk'
    }
  },
  passport: {
    github: {
        clientID: 'GH_CLIENT_ID' ,
        clientSecret: 'GH_CLIENT_SECRET',
        callbackURL:  "http://localhost:5000/auth/github/callback"
    },
  },
  //NewRelic
  config: {
  	license_key: 'YOUR_NEWRELIC_LICENSE_KEY'
  }
};
```

The development adapter already is `sails-disk`, if you'll test only with dev, there's no need for change.

#### :four: Launching
```bash
$ sails lift
```

If everything woks fine, you'll be able to see it running at: [http://localhost:5000](http://localhost:5000)


## :metal: Road Map

* Look at our issues :3


Get another data input that could be here ? [Open an issue](https://github.com/vimia/sails-core/issues/new/)		

## :coffee: From Developers for Developers
	
Sails Core will be coded to easily integrate several platforms.

## :bar_chart: Stats

[![Codeship Status for vimia/sails-core](http://img.shields.io/codeship/f64fcdf0-36fb-0132-c34e-0ef470a8deda.svg?style=flat)](https://codeship.io/projects/41548)
[![Travis](http://img.shields.io/travis/vimia/sails-core.svg?style=flat)](https://travis-ci.org/vimia/sails-core)
[![License](http://img.shields.io/npm/l/sails-core.svg?style=flat)](https://raw.githubusercontent.com/vimia/sails-core/master/LICENSE)
[![Downloads](http://img.shields.io/npm/dm/sails-core.svg?style=flat)](https://npmjs.org/package/sails-core)
[![Stories in Ready](https://badge.waffle.io/vimia/sails-core.svg?label=ready&title=Ready)](http://waffle.io/vimia/sails-core)

[![Throughput Graph](https://graphs.waffle.io/vimia/sails-core/throughput.svg)](https://waffle.io/vimia/sails-core/metrics)

### :octocat: Want to help ?

So you're a kickass developer? Help us and keep open-source alive!
See our [issues](http://github.com/vimia/blew/issues) and feel free to open a pull-request.

### :clap: We Use / Thanks to

#### Front-end
* [bower](https://github.com/bower/bower) - Front-end solution for packages;
* [jQuery](http://jquery.com) - Powerful JavaScript framework;
* [moment](https://github.com/moment/moment) - An easy way to handle time issues;

#### Back-end

* [NodeJS](http://nodejs.org/) - JavaScript runtime for easily building fast, scalable network applications;
	* [SailsJS](http://sailsjs.org/) - Realtime MVC framework for node;
		* [SailsCore](https://github.com/vimia/sails-core) - Simple Core with Sails JS;
	* [Passport.js](http://passportjs.org/) - An OAuth adapter;
	* [bcrypt](https://github.com/ncb000gt/node.bcrypt.js) - Package to create hashs;
	* [cron](https://github.com/ncb000gt/node-cron) - Package to create scheduled tasks;
	* [parse-duration](https://github.com/jkroso/parse-duration) - Parse duration of time string;
	* [ejs-locals](https://github.com/randometc/ejs-locals) - Filters and Front-end parsing;
	* [html-minifier](https://github.com/kangax/html-minifier) - HTML Minification;
* [MongoDB](http://mongodb.org/) - An open-source NoSQL database;

#### Tools

* [GitHub](http://github.com/) - Social coding :octocat:;
* [waffle.io](http://waffle.io/) - Project management solution from your existing GitHub Issues;
* [NewRelic](http://newrelic.com/) - Server-side app monitor;
* [Heroku](http://heroku.com/) - Server hosting;
* [CodeShip](http://codeship.io/) - A really cool Continuous Integration tool, and our "Automated Deploy Manager";
* [Travis](http://travis.ci/) - Another cool continuous integration;
* [CloudFlare](http://cloudflare.com/) - Our favorite DNS Manager;

### Who uses ?

 * [blew.io](http://blew.io) - Developers tool to share code.

## :octocat: Contributors
	
* @marceloboeira - Software Engineer & Creator	
