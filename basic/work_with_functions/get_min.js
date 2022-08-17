function solve(args) {
	const [a, b, c] = args.map(x => Number(x))

	function compare_two_nums(a, b) {
		if (a > b) {
			return b
		}
		return a
	}

	console.log(compare_two_nums(compare_two_nums(a, b), c))

}

solve([-101, -100, -102])