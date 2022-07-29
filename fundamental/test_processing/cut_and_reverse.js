function cut_and_reverse(string) {

	let middle = parseInt(string.length / 2)
	let start = string.split("").slice(0, middle)
	let end = string.split("").slice(middle)

	console.log(start.reverse().join(""))
	console.log(end.reverse().join(""))


}

cut_and_reverse(
	'tluciffiDsIsihTgnizamAoSsIsihT'
)