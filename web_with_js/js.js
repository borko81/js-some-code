// function alertFunction () {
// 	let speciec = prompt("Your speciec", "human");
	
// 	console.log(speciec);

// 	if (speciec === 'borko') {
// 		document.getElementById("result").innerHTML = `Hello ${speciec}!`
// 	} else {
// 		document.getElementById("result").innerHTML = "-Not found-"
// 	}
	
// }

// function alertFunction () {
// 	//Get name from id
// 	let name = document.getElementById("myname").value;

// 	//Push result in result
// 	document.getElementById("result").innerHTML = 
// 	name.slice(0, 1).toUpperCase() +
// 	name.slice(1, name.length - 1) +
// 	name.charAt(name.length - 1).toUpperCase();
// }

// function alertFunction () {
// 	let search = document.getElementById("myname").value;
// 	let text = document.getElementById("mysearch").innerHTML;
// 	if (text.indexOf(search) != -1 ){
// 		document.getElementById("result").innerHTML = 'Found';
// 	}
// }

// function generateRandomnumber() {
// 	for (let i=1; i <= 5; i++){
// 		let randomNumber = Math.trunc((Math.random() * 10) + 1);
// 		console.log(`[${i}]: ${randomNumber}`);
// 	}
// }

// generateRandomnumber()

// function convertStringToInt() {
// 	let num = prompt("Enter your age", 0);
// 	num = parseInt(num);
// 	document.getElementById("result").innerHTML = num + 1;
// }

function convertStringToInt() {
	let num = prompt("Enter your taxes", 0.00);
	num = parseFloat(num);
	//Use toFixed(2) to round to second sign.
	document.getElementById("result").innerHTML = num.toFixed(2);
}