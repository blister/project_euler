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

let leap_year = is_leap_year(year);

let looping = true;
let counting = false;
while ( looping ) {
	// only count sundays between 1 Jan 1901 and 31 Dec 2000
	if ( year >= 1901 ) {
		counting = true;
	}
	if ( day === 31 && month === 12 && year === 2000 ) {
		counting = false;
		looping = false;
		continue;
	}

	day++;
	week_day++;

	// month processing
	if ( month === 2 ) {
		if ( leap_year && day === 30 ) {
			day = 1;
			month++;
			//console.log(`${year}-0${month}-0${day}`);
		} else if ( day === 29 ) {
			day = 1;
			month++;
			//console.log(`${year}-0${month}-0${day}`);
		}
	} else if ( month in thirty ) {
		if ( day === 31 ) {
			day = 1;
			month++;
			//const month_str = month < 10 ? `0${month}` : month;
			//console.log(`${year}-${month_str}-0${day}`);
		}
	} else {
		if ( day === 32 ) {
			day = 1;
			month++;
			//const month_str = month < 10 ? `0${month}` : month;
			//console.log(`${year}-${month_str}-0${day}`);
		}
	}

	// week_day processing
	if ( week_day === 8 ) {
		week_day = 1;
	}

	// year processing
	if ( month === 13 ) {
		year++;
		leap_year = is_leap_year(year);
		if ( leap_year ) {
			console.log(`${year} is a leap year.`);
		}
		month = 1;
	}

	if ( day === 1 && week_day === 1 && counting ) {
		sundays++;
		const month_str = month < 10 ? `0${month}` : month;
		const day_str = day < 10 ? `0${day}` : day;
		console.log(`Sunday -> ${year}-${month_str}-${day_str} [${sundays}]`);
	}
}

console.log(`Finished! Total Sundays = ${sundays}`);

function is_leap_year(year) {
	if ( year % 4 === 0 ) {
		if ( year % 100 === 0 ) {
			if ( year % 400 === 0 ) {
				return true;
			}
			return false;
		}
		return true;
	}

	return false;
}

// sundays.js, created: 2023-227-15 09:35

