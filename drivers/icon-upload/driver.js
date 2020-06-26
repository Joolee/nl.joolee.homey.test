'use strict';

const Homey = require("homey");
const { readdirSync, writeFileSync } = require("fs");

module.exports = class CustomIconDriver extends Homey.Driver {

	onInit() {
		this.printUserData();
	}

	printUserData() {
		this.log("Contents of /userdata:");
		readdirSync("/userdata").forEach(file => console.log(file));
	}

	onPair(socket) {
		socket.on("newDeviceIcon", (data, callback) => {
			const filePath = "/userdata";
			const fileName = new Date().getTime() + ".svg";

			writeFileSync(`${filePath}/${fileName}`, data.svg);
			console.log("Written new icon as", `${filePath}/${fileName}`);

			callback(null, {
				"filePath": `../../..${filePath}`,
				"fileName": fileName
			});

			this.printUserData();
		});
	}
}