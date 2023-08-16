// bigfactorial.js 
// Eric Ryan Harrison (2023) | https://github.com/blister 

function factorial(num) {
	let out = BigInt(1);
	for ( let i = 2; i <= num; ++i ) {
		out = out * BigInt(i);
	}

	return out;
}

console.log(factorial(100));

// bigfactorial.js, created: 2023-228-16 13:39
