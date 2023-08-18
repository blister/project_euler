const qa = require('node-qa');
const { english, number_parse, compile } = require('../new_numstrings.js');

qa.test('NEW AMAAAAAZING FUNCTIONALITY', function() {
	this.assertEqual(english(1), 'one', '1 = "one"');
	this.assertEqual(english(100), "one hundred", '100 = "one hundred"');
	this.assertEqual(english(200), "two hundred", '200 = "two hundred"');
	this.assertEqual(english(249), "two hundred and forty-nine", '249 = "two hundred and forty-nine"');
	this.assertEqual(english(2490), "two thousand four hundred and ninety", '2490');
	this.assertEqual(english(1_000_000_001), 'one billion and one', 'one billion and one');
	this.assertEqual(
		english(987_654_321),
		"nine hundred and eighty-seven million six hundred and fifty-four thousand three hundred and twenty-one",
		'987_654_321'
	);
});

qa.test('++NEW Euler test', function() {
	let letters = 0;
	for ( let i = 1; i < 1001; ++i ) {
		letters += english(i).trim().replaceAll(' ', '').replaceAll('-', '').length;
	}

	this.assertEqual(21124, letters, 'Project Euler expects 21,124 letters.');
});
