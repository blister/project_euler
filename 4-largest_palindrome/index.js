// Problem 4 - Largest Palindrom Product
// 
// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is `9009 = 91 * 99`
//
// Find the largest palindrome made from the product of two 3-digit numbers.

/**
 * function find_palindrome(digits=3)
 * @param {number} [digits=3] - optional length of digits
 * @returns {Object} highest - return object with special keys
 * @returns {number} highest.i - one of side of the product
 * @returns {number} highest.j - the second side of the product
 * @returns {number} highest.product - the palindromic return
 */
function find_palindrome(digits = 3) {
	// grab our max
	const max_num = parseInt('9'.repeat(digits));	
	let highest = { i: 0, j: 0, product: 0 };
	let prod    = 0;
	for ( let i = max_num; i > 0; --i ) {
		for ( let j = max_num; j > 0; --j ) {
			prod = j * i;
			const is_palindrome = is_palindrome_number(prod);
			if ( is_palindrome && prod > highest.product ) {
				highest = { i: i, j: j, product: prod };
			} else if ( is_palindrome && prod < highest.product ) {
				break; // go to the next iteration of outer loop
			}
		}
	}

	return highest;
}

/**
 * function is_palindrome_string(number)
 * @param {number} number - number to check for "palindrome-yness"
 * @returns {boolean} - if it's a palindrome number or not
 */
function is_palindrome_number(number) {
	const num_str = number.toString().split('');

	// we can immediately exit if we don't even have the possibility
	// of a palindrome. Need at least two numbers to check.
	if ( number < 10 ) {
		return false;
	}

	// while we have letters, look at the first and last to see if
	// they are the same
	let head = null;
	let tail = null
	while ( num_str.length ) {
		head = num_str.shift();
		tail = num_str.pop();

		if ( head !== tail ) {
			return false;
		} else {
			// if we're down to 1 or 0, we're done and it's good!
			if ( num_str.length === 1 || num_str.length === 0 ) {
				return true;
			}
		}
	}
	
	console.log(number,false);
	return false;
}

module.exports = {
	find_palindrome, is_palindrome_number
};
