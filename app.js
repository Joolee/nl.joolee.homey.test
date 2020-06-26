'use strict';

const Homey = require('homey');

module.exports = class TestApp extends Homey.App {

	onInit() {
		this.log("Joolee's Test App is running!");
	}

}