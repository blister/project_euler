// sundays.js 
// Eric Ryan Harrison (2023) | https://github.com/blister 

/*
 * 1 Jan 1900 = Monday
 * 28 Days = Feb (year divisible by 4 except centuries divisible by 400)
 * 30 Days = September, April, June, November
 * 31 Days = All others
 *
 * how many sundays fell on the first of the month between 1 Jan 1901 -> 31 Dec 2000)
 */

let week_day = 2; // sunday = 1, mon = 2, sat = 7
let day = 1;
let month = 1;
let year = 1900;

const thirty = {4:true, 6:true, 9:true, 11:true};

let sundays = 0;

let looping = true;
let counting = false;
while ( looping ) {
	// only count sundays between 1 Jan 1901 and 31 Dec 2000
	if ( year >= 1901 ) {
		counting = true;
	}
	if ( day === 31 && month === 12 && year === 2000 ) {
		looping = false;
		continue;
	}

	day++;
	week_day++;

	// feb
	if ( month === 2 && day > 28 ) {
		if ( year % 4 !== 0 ) {
			
		}

	}

	// 30 day months
	if ( month in thirty ) {
		
	}
}

// sundays.js, created: 2023-227-15 09:35

