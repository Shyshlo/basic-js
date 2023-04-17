const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(number) {

	console.log(number)

	if (!number) {

		return 'Unable to determine the time of year!';
	}

	console.log(Date.parse(number))
	if (!Date.parse(number)) {
		throw new Error('Invalid date!');
	}

	try {
		number.getUTCDay()
	} catch {
		throw new Error('Invalid date!');
	};

	console.log(number.getMonth())
	let month = number.getMonth();
	console.log(month);

	if (month === 11 || month === 0 || month === 1) {
		console.log('winter');
		return 'winter';
	}
	if (month === 2 || month === 3 || month === 4) {
		console.log('spring');
		return 'spring';
	}
	if (month === 5 || month === 6 || month === 7) {
		console.log('summer');
		return 'summer';
	}
	if (month === 8 || month === 9 || month === 10) {
		console.log('autumn');
		return 'autumn';
	}
}
