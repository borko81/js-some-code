function company_users(array) {
	let company = {}
	array.forEach(x => {
		let [name, id] = x.split(' -> ')
		if (!company[name]) {
			company[name] = []
		}
		company[name].push(id)
	})

	let sorted_result = Object.keys(company)
		.sort()
		.reduce((acc, key) => {
			acc[key] = company[key]
			return acc
		}, {})

	for (let r of Object.entries(sorted_result)) {
		console.log(r[0])
		for (let k of r[1]) {
			console.log(`--- ${k}`)
		}
	}
}


company_users(
	[
		'SoftUni -> AA12345',
		'SoftUni -> BB12345',
		'Microsoft -> CC12345',
		'HP -> BB12345'
	]
)