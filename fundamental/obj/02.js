function town_with_coordinates(array_with_data) {
	let result = []
	array_with_data.forEach(x => {
		const [town, lat, long] = x.split(' | ')
		result.push({
			'town': town,
			'latitude': parseFloat(lat).toFixed(2),
			'longitude': parseFloat(long).toFixed(2)
		})
	})
	result.forEach(x => {
		console.log(x)
	})
}



town_with_coordinates(
	['Sofia | 42.696552 | 23.32601',
		'Beijing | 39.913818 | 116.363625'
	]
)