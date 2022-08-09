function solve(arg) {
	let n = Number(arg[0])

	let in_range = (n >= 100 && n <= 200) || n == 0;

	if (!in_range) {
		console.log('invalid')
	}
}

solve([75])