// bigprime.js
// Eric Ryan Harrison (2023) | https://github.com/blister 

const sieve = require('./sieve');

const primes = sieve(200001);
console.log(primes.length);
console.log(`The prime is: ${primes[10000]}, ${primes[10001]}`);


// bigprime.js, created: 2023-212-31 22:43

