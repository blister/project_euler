// triangles.js 
// Eric Ryan Harrison (2023) | https://github.com/blister 

function make_triangles_divs(max = 5) {
	const triangles = make_triangles(99999999); //Number.MAX_SAFE_INTEGER);

	const factors = {};
	for ( let i = 0; i < triangles.length; ++i ) {
		if ( triangles[i] ) {
			const list = factorize(i); //factorize(triangles[i]);
			const obj = { i: i, num: triangles[i], factors: list, len: list.length };
			console.log(i,list); //triangles[i],list);
			factors[ triangles[i] ] = obj;
		}
	}

	//console.log(factors);
}

function make_triangles(max = 500, num = 5) {

	const triangles = [ ];
	//
	const close = [];

	let delta = 1000; 

	let i = 1;
	let prev = 0;
	let curr = 1;
	while ( i <= num ) {
		curr = curr + 1;
		prev = curr;
		console.log(i, curr, prev);
		if ( i > delta ) {
			const check = factorize(curr);
			if ( check.length > max ) {
				console.log('We hit!', curr, prev);
			} else {
				if ( check.length >= 450 ) {
					console.log('Ending...', check.length);
					triangles.push({ curr: check.length });
				} else {
					delta = delta + ( max - check.length );
					console.log('Skipping to', delta);
				}
			}
		}
		i++;
	}

	console.log(`${num} = `,triangles);

	return triangles;
}

function factorize(n) {
	const factors = [];
	for ( let i = 0; i <= n; ++i ) {
		if ( n % i === 0 ) {
			factors.push(i);
		}
	}

	return factors;
}

module.exports = { make_triangles_divs: make_triangles_divs, factorize: factorize, make_triangles: make_triangles };
//module.exports = factorize;

// triangles.js, created: 2023-220-08 16:21

