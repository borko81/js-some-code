function solve(stock, product_delivery) {
	stock_obj = {}
	product_delivery_obj = {}
	for (let i = 1; i < stock.length; i += 2) {
		stock_obj[stock[i - 1]] = Number(stock[i])
	}

	for (let i = 1; i < product_delivery.length; i += 2) {
		product_delivery_obj[product_delivery[i - 1]] = Number(product_delivery[i])
	}

	for (let [name, quantity] of Object.entries(product_delivery_obj)) {
		if (stock_obj[name]) {
			stock_obj[name] += quantity
		} else {
			stock_obj[name] = quantity
		}
	}
	for (let [name, quantity] of Object.entries(stock_obj)) {
		console.log(`${name} -> ${quantity}`)
	}
}

solve(
	[
		'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
	],
	[
		'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
	]
)