function towns_info_generate(array_with_data) {
	obj = []
	for (let data of array_with_data) {
		let [town, lat, long] = data.split(" | ")
		obj.push({
			town: town,
			latitude: Number(lat).toFixed(2),
			longitude: Number(long).toFixed(2)
		})
	}
	obj.forEach(x => {
		console.log(x)
	})
}

towns_info_generate(
	['Sofia | 42.696552 | 23.32601',
		'Beijing | 39.913818 | 116.363625'
	]
)