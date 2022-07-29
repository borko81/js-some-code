function custom_splitter(string) {

	let words = string.split(/(?=[A-Z])/g)


	console.log(words)
}


custom_splitter(
	'HoldTheDoor'
)