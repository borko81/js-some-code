function findNthDigit(number_out, index_out) {
	let number = Number(number_out)
	let index = Number(index_out)

	let current_posiiton = 1
	let found = null

	while (current_posiiton < index + 1) {
		found = number % 10
		number = parseInt(number / 10)
		current_posiiton += 1
	}

	console.log(found)

}

findNthDigit(83746, 2)
// console.log(parseInt(83746 / 10))