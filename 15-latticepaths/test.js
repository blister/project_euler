const lattice_routes = require('./lattice_routes');

for ( let i = 0; i < 21; ++i ) {
	console.log(`${i}: ${lattice_routes(i)}`);
}

