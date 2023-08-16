#include <stdio.h>
#include <string.h>
#include "numstrings.h"

#define size 50

char *digit_string(int num) {
	switch(num) {
		case 1: return "one";
		case 2: return "two";
		case 3: return "three";
		case 4: return "four";
		case 5: return "five";
		case 6: return "six";
		case 7: return "seven";
		case 8: return "eight";
		case 9: return "nine";
		case 10: return "ten";
		case 11: return "eleven";
		case 12: return "twelve";
		case 13: return "thirteen";
		case 14: return "fourteen";
		case 15: return "fifteen";
		case 16: return "sixteen";
		case 17: return "seventeen";
		case 18: return "eighteen";
		case 19: return "nineteen";
		case 20: return "twenty";
		case 30: return "thirty";
		case 40: return "forty";
		case 50: return "fifty";
		case 60: return "sixty";
		case 70: return "seventy";
		case 80: return "eighty";
		case 90: return "ninety";
		case 100: return "hundred";
		case 1000: return "thousand";
		case 1000000: return "million";
		default: return "";
	}
}

char *num_strings(int num) {
	char out_string[size];

	out_string = digit_string(int num);

	strcat(out_string, digit_string(num));

	return out_string;	
}

int main(void) {
	printf("%i = %s\n", 1, num_strings(1));
	printf("%i = %s\n", 11, num_strings(11));
	printf("%i = %s\n", 17, num_strings(17));
	printf("%i = %s\n", 101, num_strings(101));
}

