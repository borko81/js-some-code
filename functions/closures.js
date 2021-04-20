function myFunction() {
	let a = 4;
	return a * a;
}


let b = 100
function myFunction2() {
	b *= 2;
	return b;
}


// Closure
let add = (
	function () {
		let counter = 0;
		return function () {
			counter += 1;
			return counter;
		}
	}
)();

console.log(add())
console.log(add())
