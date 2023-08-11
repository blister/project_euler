let num;
num = 1000001;
num = 17 * 19 * 211 * 433 * 523;
//num = 17 * 17 * 17 * 17 * 17 * 17 * 17 * 17 * 17;
num = 101 * 167 * 181 * 433 * 2 * 3 * 6 * 22 * 14;
//num = 541;
//num = 8181807856294299570;
//num = 67605262271750;
//num = 100;
//num = 5330951714;
num = 123456;
num = 600851475143;
num = 999851475143234;
num = 55191348958099;
num = 25222446473851243; // fail array length
num = 95575496458723;
num = 7448055325877;
num = 95575496458723;

function sqrt(value) {
	value = BigInt(value);
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
		n = BigInt(n); x0 = BigInt(x0);
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}

function factorize(n) {
	let m = sqrt(n);
	let factors = [];
	for ( let i = 0; i < m; ++i ) {
		if ( num % i === 0 ) {
			factors.push(i);
		}
	}

	return factors;
}

function sieve(n) {
	let m = sqrt(n);
	console.log(`sqrt(${n}) = ${m}`);
	n = Number(m);
	let primes = new Array(n + 1).fill(true);

	primes[0] = false;
	primes[1] = false;

	for ( let i = 2; i < sqrt(n); ++i ) {
		if ( primes[i] ) {
			for ( let j = i * i; j <= m; j += i ) {
				primes[ j ] = false;
			}
		}
	}

	let result = [];
	for ( let i = 2; i <= n; ++i ) {
		if ( primes[ i ] ) {
			result.push(i);
		}
	}

	return result;
}

function maxFactorFunc(factorList) {
	let max = sqrt(num);
	let maxF = null;
	for ( let i = factorList.length - 1; i > 0; --i ) {
		//console.log(factorList[i], max);
		if ( factorList[i] > max ) { continue; }
		if ( num % factorList[i] === 0 ) {
			return factorList[i];
		}
	}
}

let t0 = performance.now();
let primes = sieve(num);
//console.log('primes', primes);
let primes2 = Array.from(primes);
let fp;
while ( fp = primes.pop() ) {
	if ( num % fp === 0 ) {
		console.log('Highest Primes:', fp);
		break;
	}
}
// console.log(`Factors: ${factors.length}, Max Factor: ${factors[0]}`);
// console.log('factors =', factors.reverse());
console.log(`	[BEST TIME] sieve = ${performance.now() - t0} ms [${primes.length} primes]\n`);

let t1 = performance.now();
let factorList = factorize(num);
console.log(`factorize = ${performance.now() - t1} ms [${factorList.length} factors]`);
//console.log(factorList);

let t2 = performance.now();
let maxFactorFound = maxFactorFunc(factorList);
console.log(`maxFactor() = ${performance.now() - t2} ms [${maxFactorFound}]`);


console.log("Finding Prime Factors");
let maxFactor = null;
let f;
let factors = [];
while ( f = primes2.pop() ) {
	if ( num % f === 0 ) {
		factors.push(f);
	}
}

console.log('factors =', factors.reverse());
console.log(`maxFactor() = ${performance.now() - t1} ms [${maxFactorFound}]\n`);
console.log(`TOTAL ${performance.now() - t0} ms [${maxFactorFound}s]`);