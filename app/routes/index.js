'use strict';

var path = process.cwd();
var timestampHandler = require(path + "/app/controllers/timestampHandler.server.js");

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/*')
		.get(function (req, res) {
			timestampHandler(req, res);
		});
};
