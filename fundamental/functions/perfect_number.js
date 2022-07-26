function perfect_number(number) {
	// may use 0 as expected total and in if clasue increase
	// with i-value
	let divide_numbers = []

	for (let i = 1; i < number; i++) {
		if (number % i == 0) {
			divide_numbers.push(i)
		}
	}
	if ((divide_numbers.reduce((x, acc) => x + acc)) == number) {
		console.log(`We have a perfect number`)
	} else {
		console.log(`It's not so perfect`)
	}
}


perfect_number(1236498)