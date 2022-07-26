function is_palindrome_or_not(number) {
	let origin_numer = number
	let expected = 0

	while (number > 0) {
		let divide = number % 10;
		expected = expected * 10 + divide
		number = parseInt(number / 10)
	}
	if (origin_numer == expected) {
		console.log(`${origin_numer} is palindrome`)
	} else {
		console.log(`${origin_numer} is not a palindrome`)
	}
}

let numbers = [123, 323, 421, 121]
numbers.forEach(x => is_palindrome_or_not(x))