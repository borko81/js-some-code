//Write a function which will be given a single number. Your task is to find the sum of its digits.

function solve(numbers) {
	let array = []
	while (numbers > 0) {
		let d = numbers % 10;
		array.push(d)
		numbers = parseInt(numbers / 10)
	}
	console.log(array.reduce((num, acc) => num + acc))
}

solve(245678)