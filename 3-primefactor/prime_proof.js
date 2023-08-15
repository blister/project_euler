
function sieve(n) {
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
}

function mod(n) {
	const out = [2, 3, 5, 7];
	for ( let i = 2; i < n; ++i ) {
		if ( i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 ) {
			out.push(i);
		}
	}

	return out;
}

// Test limit
const sm = 300;

// the way I went
const t0 = performance.now();
const primes = sieve(sm);
console.log(`sieve = ${performance.now() - t0}`);
console.log(`sieve = `, primes);

// the way you were going
const m0 = performance.now();
const primes2 = mod(sm);
console.log(`mod = ${performance.now() - m0}`);
console.log(`mod = `, primes2);

const bad = [];
for ( let i = 0; i < primes2.length; ++i ) {
	if ( ! primes.includes(primes2[i]) ) {
		bad.push(primes2[i]);
	}
}

// bad numbers that are skipped in the second algo
console.log('bad = ', bad);
