function movie(array) {
	result = []

	for (let movie of array) {
		if (movie.split(" ")[0] == 'addMovie') {
			result.push({
				name: movie.split(" ").slice(1).join(" ")
			})
		}

		let author_search = movie.split(" directedBy ")
		if (author_search.length > 1) {
			let [name, author] = author_search
			result.forEach(x => {
				if (x['name'] == name) {
					x['director'] = author
				}
			})
		}

		let on_date = movie.split(" onDate ")
		if (on_date.length > 1) {
			let [name, date] = on_date
			result.forEach(x => {
				if (x['name'] == name) {
					x['date'] = date
				}
			})
		}

	}
	result.forEach(x => {
		console.log(x)
	})
}

movie(
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