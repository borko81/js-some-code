function calculator(...args) {
	// use eval
	let first = args[0]
	let operation = args[1]
	let second = args[2]
	return eval(`${first} ${operation} ${second}`).toFixed(2)
}

console.log(calculator(5, '+', 10))