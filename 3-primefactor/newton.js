export function sqrt(value) {
	value = BigInt(value);
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
		n = BigInt(n); x0 = BigInt(x0);
        const x1 = ((n / x0) + x0) >> 1n;
		console.log(`	[${((n / x0) + x0)}] ((${n} / ${x0}) + ${x0}) >> 1n = ${x1}`);
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

	console.log(`sqrt(${value}, 1n)`);
    return newtonIteration(value, 1n);
}
export function sqrtf(value) {
    if (value < 0) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1;
		console.log(`	[${((n / x0) + x0)}] ((${n} / ${x0}) + ${x0}) >> 1 = ${x1}`);
        if (x0 === x1 || x0 === (x1 - 1)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

	console.log(`sqrtf(${value}, 1)`);
    return newtonIteration(value, 1);
}

