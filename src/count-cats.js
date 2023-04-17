const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	let number = 0;
	let a = 0;
	console.log(matrix)
	for (; a < matrix.length; a++) {
		let c = 0;
		
		for (; c < matrix[a].length; c++) {
			
			if (matrix[a][c] === "^^") {
				number++;
				
				
			}
		}
	} 
	console.log(number)
	return number;
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	countCats
};
countCats([
	 [0, 1, '^^'],
	  [0, '^^', 2],
	 ['^^', 1, 2]
	])