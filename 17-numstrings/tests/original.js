const qa = require('node-qa');
require('../numstrings.js');

qa.test('Verify functionality with original', function() {
	this.assertEqual(new Number(1).toNumString(), 'one', '1 = "one"');
	this.assertEqual(new Number(100).toNumString(), "one hundred", '100 = "one hundred"');
	this.assertEqual(new Number(200).toNumString(), "two hundred", '200 = "two hundred"');
	this.assertEqual(new Number(249).toNumString(), "two hundred and forty-nine", '249 = "two hundred and forty-nine"');
});

qa.test('Euler test', function() {
	let letters = 0;
	for ( let i = 1; i < 1001; ++i ) {
		letters += i.toNumString().letterLength();
	}

	this.assertEqual(21124, letters, 'Project Euler expects 21,124 letters.');
});


