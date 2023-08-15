#include <stdio.h>
#include <stdbool.h>

typedef struct date {
	int year;
	int month;
	int day;
	int week_day;
} Date;

bool is_leap_year(int year) {
	if ( year % 4 == 0 ) {
		if ( year % 100 == 0 ) {
			if ( year % 400 == 0 ) {
				return true;
			}
			return false;
		}

		return true;
	}

	return false;
}

bool is_thirty_day_month(int month) {
	switch(month) {
		case 4:
		case 6:
		case 9:
		case 11:
			return true;
		default:
			return false;
	}
}

void process_month(Date * current) {
	if ( current->month == 2 ) {
		if ( is_leap_year(current->year) && current->day == 30 ) {
			current->day = 1;
			current->month++;
		} else if ( current->day == 29 ) {
			current->day = 1;
			current->month++;
		}
	} else if ( is_thirty_day_month(current->month) ) {
		if ( current->day == 31 ) {
			current->day = 1;
			current->month++;
		}
	} else if ( current->day == 32 ) {
		current->day = 1;
		current->month++;
	}

	return;
}

int main(void) {
	Date date = { 1900, 1, 1, 2 }; 

	bool looping  = true;
	bool counting = false;

	int sundays = 0;

	while (looping) {
		// exit conditions
		if ( date.year >= 1901 ) {
			counting = true;
		}
		if ( date.day == 31 && date.month == 12 && date.year == 2000 ) {
			counting = false;
			looping  = false;
			continue;
		}

		date.day++;
		date.week_day++;

		process_month(&date);

		if ( date.week_day == 8 ) {
			date.week_day = 1;
		}

		if ( date.month == 13 ) {
			date.year++;
			if ( is_leap_year(date.year) ) {
				printf("%i is a leap year!\n", date.year);
			}
			date.month = 1;
		}

		if ( date.day == 1 && date.week_day == 1 && counting ) {
			sundays++;
			printf("Sunday -> %i-%02i-%02i [%i]\n", date.year, date.month, date.day, sundays);
		}
	}

	printf("\nFinished! Total Sundays = %i\n\n", sundays);

	return 0;
}

