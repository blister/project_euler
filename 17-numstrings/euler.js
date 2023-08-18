const { english } = require('./new_numstrings.js');
require('./numstrings.js');

let fails = [];
let count = 0;
for ( let i = 1; i < 1001; ++i ) {
	const new_str = english(i);
	const old_str = i.toNumString();
	count += new_str.replaceAll(' ', '').replaceAll('-', '').length;
	if ( new_str === old_str ) {
		console.log(`${i} ✅ ${new_str}`);
	} else {
		fails.push({ 'new': new_str, 'old': old_str });
		console.log(`${i} ❌`);
		console.log(`\tOld: ${old_str}`);
		console.log(`\tNew: ${new_str}`);
	}
}

if ( fails.length ) {
	console.log(fails);
} else {
	console.log(`\n✅ All tests passed! [${count}]`);
}
