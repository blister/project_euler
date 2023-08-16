// numstrings.js 
// Eric Ryan Harrison (2023) | https://github.com/blister 

/**
 * Number Letter Counts
 *
 * Replace each number with it's formal named version.
 *
 * 1  = one
 * 2  = two
 * 55 = Fifty-five
 * 126 = One Hundred and twenty-six
 *
 * How many letters are used in writing out every number between 1-1001?
 * (exclude hyphens and spaces)
 */

const NUM_MAP = {
	0: null, // zero is never spelled out
	1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
	6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
	11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
	16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
	20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
	70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred',
	1000: 'thousand'
};


Number.prototype.toNumString = function() {
	const digits = this.toString().split('');
	let out_string = '';
	let use_and = '';

	if ( digits.length === 4 ) {
		use_and = 'and';
		out_string += `${NUM_MAP[ digits.shift() ]} ${NUM_MAP[1000]} `;	
	}

	if ( digits.length === 3 ) {
		if ( digits[0] === '0' ) {
			digits.shift();
		} else {
			use_and = 'and';
			out_string += `${NUM_MAP[ digits.shift() ]} ${NUM_MAP[100]} `;	
		}
	}

	if ( digits[0] === '0' ) {
		digits.shift();
	} 
	if ( digits.length === 2 && digits.join('') in NUM_MAP ) {
		out_string += `${use_and} ${NUM_MAP[digits.join('')]}`;
	} else if ( digits.length === 2 ) {
		out_string += `${use_and} ${NUM_MAP[digits.shift() + '0']}-${NUM_MAP[digits.shift()]}`;
	}

	if ( digits[0] === '0' ) {
		digits.shift();
	} 
	if ( digits.length === 1 ) {
		out_string += `${use_and} ${NUM_MAP[ digits.shift() ]}`;
	}
	
	return out_string.trim();
	//return { orig: this.toString(), digits: digits, value: out_string };
};

String.prototype.letterLength = function() {
	return this.replaceAll(' ', '').replaceAll('-', '').length;
};

console.log(
	new Number(342).toNumString(),
	new Number(342).toNumString().letterLength()
);
console.log(
	new Number(115).toNumString(),
	new Number(115).toNumString().letterLength()
);

let letter_count = 0;
for ( let i = 1; i < 1001; ++i ) {
	console.log(i, `is "${i.toNumString()}" =`, i.toNumString().letterLength());
	letter_count += i.toNumString().letterLength();
}

console.log(`Letters: ${letter_count}`);

// numstrings.js, created: 2023-227-15 16:12

