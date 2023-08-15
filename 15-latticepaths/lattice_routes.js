// lattice_routes.js 
// Eric Ryan Harrison (2023) | https://github.com/blister 
function lattice_routes(squares) {
	// routes = (sides+sides)! / (sides!) * (sides!)
	const path = factorial(squares + squares);
	const fact = factorial(squares);
	const opts = fact * fact;

	return path / opts;
}

function factorial(num) {
	num = BigInt(num);
	if ( num <= 1n ) {
		return 1n;
	}
	return num * factorial(num - 1n);
}

module.exports = { lattice_routes, factorial };
// lattice_routes.js, created: 2023-226-14 13:19
