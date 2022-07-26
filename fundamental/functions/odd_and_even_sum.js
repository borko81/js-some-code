function odd_and_even_sum(number) {
	let odd = []
	let even = []

	while (number > 0) {
		let divide = number % 10
		if (divide % 2) {
			odd.push(divide)
		} else {
			even.push(divide)
		}

		number = parseInt(number / 10)
	}

	function sum(array) {
		return array.reduce((n, acc) => n + acc)
	}

	return `Odd sum = ${sum(odd)}, Even sum = ${sum(even)}`

}

console.log(odd_and_even_sum(3495892137259234))