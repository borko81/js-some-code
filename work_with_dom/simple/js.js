function TestParam(name) {
	document.getElementById("result").innerHTML = name;
}

function Secret() {
	let answer = confirm("Do you want to displa the secret message...")
	if (answer) {
		document.getElementById("result").innerHTML = "Secret";
	} else {
		alert("Bye")
	}
}