#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

int64_t max_seen = 0;

int64_t GetNextTerm(int64_t term) {
	if (term % 2 == 0)
		return term / 2;
	return (3 * term) + 1;
}

int main(void) {
	printf("Starting the thing...\n");
	int termsMax = 0;
	int startingNum = 0;
	for (int i = 1000000; i > 1; --i) {
		int64_t t = i;
		int termsCount = 1;
		while (t != 1) {
			t = GetNextTerm(t);
			if ( t > max_seen ) {
				max_seen = t;
			}
			termsCount++;
		}
		
		if (termsCount > termsMax) {
			termsMax = termsCount;
			printf("%i, %i, Max - %" PRId64 "\n", i, termsMax, max_seen);
			startingNum = i;
		}
	}


	printf("%i, %i, Max - %" PRId64 "\n", startingNum, termsMax, max_seen);
	printf("Starting num was %i with %i terms\n", startingNum, termsMax);

	return 0;
}

