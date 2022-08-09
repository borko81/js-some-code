function solve(args) {
	let money = Number(args[0])
	let season = args[1].toLowerCase()
	let result_money = 0
	let where = ''
	let posiiton = ''

	if (money <= 100) {
		where = 'Somewhere in Bulgaria'

		if (season == 'summer') {
			posiiton = "Camp - "
			result_money = money * 0.3
		} else {
			posiiton = "Hotel - "
			result_money = money * 0.7
		}
	} else if (money > 100 && money <= 1000) {
		where = 'Somewhere in Balkans'
		if (season == 'summer') {
			posiiton = "Camp - "
			result_money = money * 0.4
		} else {
			posiiton = "Hotel - "
			result_money = money * 0.8
		}
	} else {
		posiiton = "Hotel - "
		where = 'Somewhere in Europe'
		result_money = money * 0.9
	}

	console.log(where)
	console.log(`${posiiton}${result_money.toFixed(2)}`)

}

solve([1500, 'summer'])