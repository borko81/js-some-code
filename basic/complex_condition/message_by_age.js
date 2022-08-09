function solve(args) {
	let age = Number(args[0])
	let gender = args[1]

	if (gender == 'm') {
		if (age < 16) {
			console.log('Master')
		} else {
			console.log('Mr.')
		}
	} else {
		if (age < 16) {
			console.log('Miss')
		} else {
			console.log('Ms.')
		}
	}
}

solve([13.5, 'm'])