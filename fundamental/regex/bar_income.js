function bar_income(data) {

	let total_income = 0

	for (let d of data) {
		if (d !== 'end of shift') {
			let validate = /%(?<user_name>[A-Z][a-z]+)%\w*<(?<product>[a-zA-Z]+)>\w*\|(?<count>\d+)\|\w*(?<price>\d+\.?\d+)\$/

			let result = d.match(validate)



			if (result) {
				let name = result.groups.user_name
				let product = result.groups.product
				let count = result.groups.count
				let price = result.groups.price
				let total = parseFloat(price) * Number(count)
				total_income += total
				console.log(`${name}: ${product} - ${total.toFixed(2)}`)
			}
		}
	}
	console.log('Total income: ' + total_income.toFixed(2))
}


bar_income(
	[
		"%InvalidName%<Croissant>|2|10.3$",
		"%Peter%<Gum>1.3$",
		"%Maria%<Cola>|1|2.4",
		"%Valid%<Valid>valid|10|valid20$",
		"end of shift"
	]
)