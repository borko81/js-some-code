function solve(a, b, c) {
	function sum(a, b) {
		return a + b
	}

	function substract(total, c) {
		return total - c
	}

	return substract(sum(a, b), c)

}

console.log(solve(23, 6, 10))