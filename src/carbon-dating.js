const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (!isNaN(parseFloat(sampleActivity)) && typeof sampleActivity === 'string' && (parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY)) {
		let m = 0.693 / HALF_LIFE_PERIOD;
		let item = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / m);

		console.log(item);
		return item;

	}
	else {

		return false;
	}
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here

}

module.exports = {
	dateSample
};

dateSample('1')