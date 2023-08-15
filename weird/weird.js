let termsMax = 0;
let startingNum = 0;
let t0 = performance.now();

for (let i = 1_000_000; i > 1; --i) {
    let t = i;
    let termsCount = 1;
    while (t != 1) {
        t = GetNextTerm(t);
		//console.log(t);
        termsCount++;
    }

    if (termsCount > termsMax){
        termsMax = termsCount;
		console.log(i,termsMax);
        startingNum = i;
    }
}

function GetNextTerm(term) {
    if (term % 2 == 0)
        return term / 2;
    return (3 * term) + 1;
}

console.log(`StartingNum was ${startingNum} with ${termsMax} terms ${performance.now() - t0} MS`);
