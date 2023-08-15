const dict = {
	0: 0,
    1: "one".length,
    2: "two".length,
    3: "three".length,
    4: "four".length,
    5: "five".length,
    6: "six".length,
    7: "seven".length,
    8: "eight".length,
    9: "nine".length,
    10: "ten".length,
    11: "eleven".length,
    12: "twelve".length,
    13: "thirteen".length,
    14: "fourteen".length,
    15: "fifteen".length,
    16: "sixteen".length,
    17: "seventeen".length,
    18: "eighteen".length,
    19: "nineteen".length,
    20: "twenty".length,
    30: "thirty".length,
    40: "fourty".length,
    50: "fifty".length,
    60: "sixty".length,
    70: "seventy".length,
    80: "eighty".length,
    90: "ninety".length,
    100: "hundred".length,
    1000: "thousand".length
  };

let count = 0;

for (let i = 1; i <= 20; ++i){
	console.log(`     Logic for ${i}`);
	// console.log(`${i} was ${dict[i]}`)
    addAsInt(i);
}

for (let i = 21; i <= 99; ++i){
	console.log(`     Logic for ${i}`);
    let s = i.toString();

	count += dict[parseInt(`${s[0]}0`)];
	// console.log(dict[parseInt(`${s[0]}0`)]);
	let tens = dict[parseInt(`${s[0]}0`)];
	console.log(`Adding ${s[0]}0 with value ${tens} to count => ${count}`);

	addAsInt(parseInt(s[1]));

    // console.log(`i ${i} and string ${s} were ${parseInt(s[0])} ${parseInt(s[1])}`);
	// console.log(parseInt(s[1]));
	// console.log(`dict value of ${s[0]}0 is ${dict[parseInt(`${s[0]}0`)]}`);
	// console.log(parseInt(`${s[0]}0`));
	// console.log(typeof(parseInt(`${s[0]}0`)));
}

count += dict[1] + dict[100];//one hundred
console.log(`     Logic for 100 - added ${dict[1]} and ${dict[100]} to count => ${count}`);

for (let i = 101; i <= 999; ++i){
	console.log(`     Logic for ${i}`);
	let s = i.toString();
	count += dict[parseInt(`${s[0]}`)];//if 100 this adds "one"
	count += dict[100] + 3; //accounting for "hundred and" - can fix later

	let huns = dict[parseInt(`${s[0]}`)];
	console.log(`Adding ${s[0]} for ${s[0]}00 as +${huns}, 'hundred' +${dict[100]}, 'and' +3 to count => ${count}`);

	let isTeen = parseInt(`${s[1]}${s[2]}`);
	if (isTeen >= 10 && isTeen <= 20){
		// console.log(`Account for teen ${s[1]}${s[2]} which is ${isTeen} and ${typeof(isTeen)}`);
		addAsInt(isTeen); //todo account for teens
	} else {
		let tens = dict[parseInt(`${s[1]}0`)];
		count += dict[parseInt(`${s[1]}0`)]; //tens like "fifty"
		console.log(`Adding ${s[1]} for ${s[1]}0 as +${tens} to count => ${count}`);
		addAsInt(parseInt(s[2]));
	}

}

count += dict[1] + dict[1000];//one thousand
console.log(`     Logic for 1000 - added ${dict[1]} and ${dict[1000]} to count => ${count}`);

//1-20
function addAsInt(int){
	count += dict[int];
	console.log(`addAsInt ${int} as +${dict[int]} to count => ${count}`);
}

console.log(`Congratulations you made it to the end and count is ${count}`);
