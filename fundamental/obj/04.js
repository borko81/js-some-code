function movies_info(array_with_data) {
	let result = {}

	function add_something_to_obj(where, what_search, result) {
		if (where.includes(what_search)) {
			let temp = where.split(" ")
			let position = temp.indexOf(what_search)
			let name = temp.slice(0, position).join(" ")
			let dir = temp.slice(position + 1).join(" ")
			if (name in result) {
				result[name][what_search] = dir
			}
		}
	}

	function generate_obj(temp) {
		if (temp[0] == 'addMovie') {
			result[temp.slice(1).join(" ")] = {
				'onDate': null,
				'directedBy': null
			}
		}
	}

	array_with_data.forEach(x => {

		let temp = x.split(" ")
		generate_obj(temp)
		add_something_to_obj(x, 'directedBy', result)
		add_something_to_obj(x, 'onDate', result)

	})

	Object.entries(result).forEach(x => {
		let row = {
			"name": x[0],
			"date": x[1]['onDate'],
			'director': x[1]['director']
		}
		console.log(
			JSON.stringify(row)
		)
	})
}

movies_info(
	[
		'addMovie Fast and Furious',
		'addMovie Godfather',
		'Inception directedBy Christopher Nolan',
		'Godfather directedBy Francis Ford Coppola',
		'Godfather onDate 29.07.2018',
		'Fast and Furious onDate 30.07.2018',
		'Batman onDate 01.08.2018',
		'Fast and Furious directedBy Rob Cohen'
	]
)