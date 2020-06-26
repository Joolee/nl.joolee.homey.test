'use strict';

const Homey = require("homey");
const { unlinkSync } = require("fs");

module.exports = class CustomIconDevice extends Homey.Device {

	onInit() {
		this.icon = this.getData().icon;
		this.log("Using icon:", this.icon);
	}

	onDeleted() {
		const fileName = "/userdata/" + this.icon;

		this.log("Removing device");
		this.log("Deleting:", fileName);

		unlinkSync(fileName);
		this.getDriver().printUserData();
	}
}