#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>
#include <gmp.h>

void lattice(int n) {
	mpz_t top;
	mpz_t bot;
	mpz_init(top);
	mpz_init(bot);
	mpz_set_ui(top, 1);
	mpz_set_ui(bot, 1);

	for ( int i = 2; i <= n*2; ++i ) {
		mpz_mul_ui(top, top, i);
	}
	for ( int i = 2; i <= n; ++i ) {
		mpz_mul_ui(bot, bot, i);
	}
	mpz_mul(bot,bot,bot);

	mpz_t result;
	mpz_init(result);
	mpz_div(result, top, bot);

	gmp_printf("%i = %Zd\n", n, result);

	mpz_clear(result);
	mpz_clear(top);
	mpz_clear(bot);
	return;
}

int main(void) {
	for ( int i = 1; i < 81; ++i ) {
		lattice(i);	
	}
}
