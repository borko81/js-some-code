function travel_time(array) {
	let result = {}

	for (let data of array) {
		let [country, town, cost] = data.split(" > ")

		if (!result[country]) {
			result[country] = {}
		}
		if (result[country][town]) {
			result[country][town] = Math.min(Number(result[country][town]), Number(cost))
		} else {
			result[country][town] = cost
		}


	}
	let sorted_result = Object.keys(result)
		.sort()
		.reduce((accumulator, key) => {
			accumulator[key] = result[key]
			return accumulator
		}, {})

	for (let r of Object.entries(sorted_result)) {
		console.log(
			r[0] + ' -> ' + Object.entries(r[1])
			.join(" ")
			.split(",")
			.join(" -> ")
		)

	}
}

travel_time(
	[
		"Bulgaria > Sofia > 500",
		"Bulgaria > Sopot > 800",
		"France > Paris > 2000",
		"Albania > Tirana > 1000",
		"Bulgaria > Sofia > 200"
	]
)