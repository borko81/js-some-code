function solve(args) {
	let [simple, town, q] = args
	simple = simple.toLowerCase()
	town = town.toLowerCase()

	const simple_mapper = {
		'coffee': {
			'sofia': 0.5,
			'plovdiv': 0.4,
			'varna': 0.45
		},
		'water': {
			'sofia': 0.8,
			'plovdiv': 0.7,
			'varna': 0.7
		},
		'beer': {
			'sofia': 1.2,
			'plovdiv': 1.15,
			'varna': 1.1
		},
		'sweets': {
			'sofia': 1.45,
			'plovdiv': 1.3,
			'varna': 1.35
		},
		'peanuts': {
			'sofia': 1.6,
			'plovdiv': 1.5,
			'varna': 1.55
		},
	}

	console.log((Number(simple_mapper[simple][town]) * q).toFixed(2))

}

solve(['beer', 'Sofia', 6])