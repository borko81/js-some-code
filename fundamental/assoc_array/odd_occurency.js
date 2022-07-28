function solve_odd_occurency(string) {
	result = {}
	let character_that_found_odd_time = []

	for (let s of string.split(" ").map(x => x.toLowerCase())) {
		if (!result[s]) {
			result[s] = 0
		}
		result[s] += 1
	}

	for (let k of Object.entries(result)) {
		if (k[1] % 2 !== 0) {
			character_that_found_odd_time.unshift(k[0])
		}
	}
	console.log(character_that_found_odd_time.sort((x, y) => {
		return x[0].localeCompare(y[0])
	}).join(" "))

}


solve_odd_occurency(
	'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)