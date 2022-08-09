function solve(args) {
	let size = Number(args[0])
	let grape_input = Number(args[1])
	let need_liter = Number(args[2])
	let employees = Number(args[3])

	let size_for_harvest = (size * 0.4) * grape_input
	let wine = (size_for_harvest / 2.5)

	const result = wine - need_liter

	if (result >= 0) {
		console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.
${Math.ceil(result)} liters left -> ${Math.ceil(result / employees)} liters per person.`)
	} else {
		console.log(`It will be a tough winter! More ${Math.floor(Math.abs(result))} liters wine needed.`)
	}
}

solve([1020, 1.5, 425, 4])