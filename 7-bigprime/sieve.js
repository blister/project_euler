// sieve.js 
// Eric Ryan Harrison (2023) | https://github.com/blister 

 module.exports = (n) => {
	const primes = new Array(parseInt(n) + 1).fill(true);

	primes[0] = false;
	primes[1] = false;

	for ( let i = 2; i < Math.sqrt(n); ++i ) {
		if ( primes[i] ) {
			for ( let j = i * i; j <= n; j += i ) {
				primes[ j ] = false;
			}
		}
	}

	const result = [];
	for ( let i = 2; i <= n; ++i ) {
		if ( primes[ i ] ) {
			result.push(i);
		}
	}

	return result;
};

// sieve.js, created: 2023-212-31 22:46
