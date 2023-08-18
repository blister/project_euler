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
//	0: null, // zero is never spelled out
	1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
	6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
	11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
	16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
	20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
	70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred',
};

// DEBUG true will display the full AST for all operations
// via console.log. Super fun and useful for debugging
let DEBUG = false;

if ( process.argv.length > 2 ) {
	const nums = [];
	const args = process.argv.slice(2);
	while ( args.length ) {
		const arg = args.shift();
		if ( arg === 'debug' || arg === '-d' ) {
			DEBUG = true;
		} else {
			nums.unshift(arg);
		}
	}

	if ( nums.length ) {
		for ( let i = 0; i < nums.length; ++i ) {
			console.log(`${nums[i]} ==> ${english(nums[i])}`);
		}
	}
}

/* english(int num)
 *
 * Takes a number, parses it, and returns a compiled English string.
 */
function english(num) {
	return compile(number_parse(num));
}

/* clean_tree(array dirty_ast): array clean 
 *
 * Take a parsed AST and return a cleaned version with
 * un-used places removed
 */
function clean_tree(dirty_ast) {
	let place = false;
	const clean = [];
	let and = false;
	while ( dirty_ast.length ) {
		let token = dirty_ast.shift();
		if ( token.num === null && place === false ) {
			place = true;
			if ( 'and' in token && token.and === true ) {
				and = true;
				clean[ clean.length - 1 ].and = false;
			}
		} else if ( token.num === null && place === true ) {
			if ( 'and' in token && token.and === true ) {
				clean[ clean.length - 1].and = token.and;
				//token.and = false;
			} else if ( 'and' in token && and === true ) {
				token.and = false;
				clean[ clean.length - 1 ].and = false;
			}
			token = null;
		} else if ( token.num !== null ) {
			place = false;
		}

		if ( token && 'num' in token && token.num && token.precision === 100 && and === true ) {
			token.and = false;
		}

		if ( token ) {
			clean.push(token);
		}
	}

	return clean;
}

/* compile(object parsed)
 *
 * Compile takes a parsed number and compiles it into an English string.
 */
function compile(parsed) {
	const dirty_ast = parsed.ast;
	let output = '';
	let space = '';

	// strip out any unused "place" tokens
	// 1_000_000 = one million, not one million thousand
	const ast = clean_tree(dirty_ast);	

	// compile full string
	while ( ast.length ) {
		space = '';
		const token = ast.shift();
		const num_int = token.num;
		DEBUG && console.log(token);
		if ( num_int && num_int in NUM_MAP ) {
			let and = '';
			let dash = '';
			if ( num_int === 100 && token.and && ast.length ) {
				and = ' and';
			}
			if ( num_int > 10 && num_int < 100 && ast.length ) {
				dash = '-';
				space = ' ';
			} else {
				if ( output[ output.length - 1] === '-' || output.length === 0 ) {
					space = '';
				} else {
					space = ' ';
				}
			}
			output += `${space}${NUM_MAP[num_int]}${dash}${and}`;
		} else {
			// commas fail the euler, but I'm adding it back later
			//output += ` ${token.text},`;
			if ( output[ output.length - 1 ] === '-' ) {
				output = output.slice(0, output.length - 1);
			}
			if ( token.and && token.and === true && ast.length > 0 ) {
				const and = ' and';
				output += ` ${token.text}${and}`;
			} else {
				output += ` ${token.text}`;
			}
		}
	}

	return output.trim();
}

/* number_parse(int num)
 *
 * number_parse accepts an integer and returns an abstract syntax tree
 * tokenized for compilation.
 */
function number_parse(num) {
	const parsed = {
		num: num,
		ast: []
	}; // output array
	const reducer = [
		'thousand', 'million', 'billion', 'trillion', 'quadrillion',
		'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion',
		'decillion', 'undecillion', 'duodecillion', 'tredecillion',
		'quattuordecillion', 'sexdecillion', /* sextillion is highest */
		'septendecillion', 'octodecillion', 'novemdecillion',
		'vigintillion', 'centillion',
	];
	let negative = false;
	let and = false;
	
	if ( num === 0 ) {
		return { num: 0, text: 'zero' };
	} else if ( num < 0 ) {
		negative = true;
		num = num * -1;
	}

	let precision = 10;
	DEBUG && console.log(`----- ${num} -----`);
	if ( num in NUM_MAP && num < 100 ) {
		DEBUG && console.log('Perfect:', num);
		parsed.ast.unshift({ num: num });
		num = 0;
	}
	while ( num > 0 ) {
		let final = '';
		// by default we're going to subtract the number from
		// our running total. However, if we're in a pre-defined
		// number, we want to skip so that we can grab the next digit
		let subtract = true; 

		let pass = false;

		// when we go up an order of magnitude,.unshift
		// will be set to "true" and we'll divide by 1000
		let demagnify = false; 
		const digit = num % precision;
		const next_place = num % ( precision * 10 );
		const place = precision / 10;
		if ( place === Infinity ) {
			DEBUG && console.log('wtf?');
			break;
		}
		const significant = digit / place;
		if ( digit in NUM_MAP && digit !== significant && significant === 1 && digit >= 20 ) {
			final = `**1 & ${digit}**`;
			and = true;
			parsed.ast.unshift({
				num: digit,
				precision: precision / 10,
				and: and,
			});
			parsed.ast.unshift({ num: 1 });
		} else if ( next_place in NUM_MAP ) {
			// skip digits we have a thing for
			if ( next_place === digit || next_place <= 20 ) {
				subtract = false;
				final = `:${next_place}:`;
				parsed.ast.unshift({ num: next_place });
			} else if ( digit === significant ) {
				subtract = false;
				pass     = true;
				final = '==pass==';
			}
		} else if ( digit in NUM_MAP && significant > 1 ) {
			final = `>=${digit}<=`;
			parsed.ast.unshift({ num: digit });
		} else if ( place in NUM_MAP && significant > 1 ) {
			final = `~~${significant} & ${place}~~`;
			and = true;
			parsed.ast.unshift({
				num: place,
				precision: precision / 10,
				and: and,
			});
			parsed.ast.unshift({ num: significant });
		} else if ( digit === significant && digit === place ) {
			final = `<-${significant}->`;
			parsed.ast.unshift({ num: digit, precision: precision / 10 });
		} else if ( digit / 1000 >= 1 ) {
			const precision_text = reducer.shift();
			parsed.ast.unshift({
				num: null,
				precision: precision / 10,
				text: precision_text,
				and: and === false ? true : false,
			});
			and = false;
			precision = 1;
			demagnify = true;
			subtract = false;
			final = `++${precision_text}++`;
		}

		DEBUG && console.log('\t',num, '=>',significant, digit, place,final);

		if ( subtract === true ) {
			num = num - ( num % precision );
		} else if (demagnify === true ) {
			num = num / 1000;
		} else {
			if ( ! pass ) {
				num = num - next_place;
			}
		}

		precision = precision * 10;
	}

	if ( negative ) {
		parsed.ast.unshift({ negative: negative });
	}

	return parsed;
}

module.exports = {
	english: english,
	number_parse: number_parse,
	compile: compile
};

