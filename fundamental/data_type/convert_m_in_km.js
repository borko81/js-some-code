function convert_m_to_km(metters) {
	return (metters / 1000).toFixed(2)
}


let values = [1852, 798]

values.forEach(x => {
	let answer = convert_m_to_km(x)
	console.log(answer)
})