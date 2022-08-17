function solve(args) {
	let num = Number(args[0])
	let step = Number(args[1])

	function calculatePower(num, step) {
		let result = num
		if (step == 0 && step !== 0) {
			return 1
		}
		if (num == 0 && step == 0) {
			return 0
		}
		while (step > 1) {
			result *= num
			step--
		}
		return result
	}

	let result = calculatePower(num, step)
	console.log(result)
}



solve([3.5, 4])