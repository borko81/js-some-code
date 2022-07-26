function loading_bar(number) {
	let numbers = []
	let percent_value = '%'.repeat(number / 10)
	let dot_value = '.'.repeat(10 - number / 10)

	if (percent_value.length == 10) {
		console.log(`100% Complete!`)
		console.log(`${number}% [${percent_value}${dot_value}]`)
	} else {
		console.log(`${number}% [${percent_value}${dot_value}]`)
		console.log(" ")
		console.log(`Still loading...`)
	}
}

loading_bar(100)