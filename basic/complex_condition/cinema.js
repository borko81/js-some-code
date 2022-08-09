function solve(args) {
	let type = args[0].toLowerCase()
	let row = Number(args[1])
	let col = Number(args[2])
	let income = row * col

	switch (type) {
		case 'premiere':
			income *= 12
			break
		case 'normal':
			income *= 7.5
			break
		case 'discount':
			income *= 5
			break
	}
	console.log(income.toFixed(2) + ' leva')
}

solve(['Normal', 21, 13])