function solve_furnitures(...data) {
	let cost = 0
	let items = []
	for (let i = 0; i < data.length; i++) {
		if (data[i] !== 'Purchase') {
			let what_expect = data[i].match(/>>(?<name>[a-zA-Z]+)<<(?<price>\d+\.?\d+)!(?<q>\d+)/)
			if (what_expect) {
				let name = what_expect.groups.name
				items.push(name)
				let price = what_expect.groups.price
				let quantity = what_expect.groups.q
				cost += parseFloat(price) * Number(quantity)
			}
		}
	}
	console.log(`Bought furniture:
${items.join("\n")}
${cost.toFixed(2)}`)
}


solve_furnitures(
	">>Sofa<<312.23!3",
	">>TV<<300!5",
	">Invalid<<!5",
	"Purchase"

)