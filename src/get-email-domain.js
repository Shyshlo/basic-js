const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function renameFiles(names) {
	console.log(names)
	for (let i = 0; i < names.length; i++) {
		let res = 1;
		for (let j = i + 1; j < names.length; j++) {
			if (names[i] === names[j]) {
				names[j] += `(${res})`;
				console.log(names[i])
				console.log(names[j])
				res++;
				console.log(res)
			}
		}
	}
	console.log(names)
	return names;


	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	renameFiles
};
renameFiles(['a', 'a','b', 'cd', 'b ', 'a(3)'])