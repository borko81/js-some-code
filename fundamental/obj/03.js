function store_provision(stock, order) {
	let shop = {}
	for (let i = 1; i < stock.length; i += 2) {
		shop[stock[i - 1]] = Number(stock[i])
	}

	for (let i = 1; i < order.length; i += 2) {
		let temp_name = order[i - 1]
		let q = order[i]

		if (temp_name in shop) {
			shop[temp_name] += Number(q)
		} else {
			shop[temp_name] = q
		}
	}

	Object.entries(shop).forEach(x => {
		console.log(
			`${x[0]} -> ${x[1]}`
		)
	})
}


store_provision(
	[
		'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
	],
	[
		'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
	]
)