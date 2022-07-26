function factorial_division(a, b) {
	function get_factorial(x) {
		if (x < 0) {
			return -1
		} else if (x == 0) {
			return 1
		} else {
			return (x * get_factorial(x - 1))
		}
	}
	return (get_factorial(a) / get_factorial(b)).toFixed(2)
}

let answer = factorial_division(6, 2)
console.log(answer)