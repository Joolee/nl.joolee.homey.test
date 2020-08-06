'use strict';

const Homey = require("homey");

module.exports = class TriggerTestDriver extends Homey.Driver {

	onInit() {
		let rainStartTrigger = new Homey.FlowCardTrigger('rain_start');
		rainStartTrigger
			.register()
			.trigger()
			.catch(this.error)
			.then(this.log)
	}
}