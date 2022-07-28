function words_tracker(arr) {
	let result = {}
	for (let word of arr.shift().split(" ")) {
		let temporay = {}
		temporay[word] = 0
		Object.assign(result, temporay)
	}
	for (let word of arr) {
		if (result[word] != undefined) {
			result[word] += 1
		}
	}

	for (let x of Object.entries(result)) {
		console.log(`${x[0]} - ${x[1]}`)
	}

}


words_tracker(
	[
		'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
	]
)