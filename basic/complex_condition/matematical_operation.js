function solve(args) {
	let a = Number(args[0])
	let b = Number(args[1])
	let operator = args[2]


	function temp(result) {
		let type = (result % 2 == 0) ? 'even' : 'odd'
		console.log(`${a} ${operator} ${b} = ${result} - ${type}`);
	}

	function sum_me() {
		var result = a + b;
		temp(result);
	}

	function substract_me() {
		let result = a - b;
		temp(result);
	}

	function miltiplyer() {
		let result = a * b;
		temp(result);
	}

	function divide_me() {
		if (b == 0) {
			console.log(`Canno divide ${a} by zero`);
		} else {
			let result = (a / b).toFixed(2);
			console.log(`${a} ${operator} ${b} = ${result}`);
		}
	}

	function divide_me2() {
		if (b == 0) {
			console.log(`Canno divide ${a} by zero`)
		} else {
			let result = a % b;
			console.log(`${a} ${operator} ${b} = ${result}`)
		}
	}

	switch (operator) {
		case '+':
			sum_me()
			break;
		case '-':
			substract_me()
			break;
		case '*':
			miltiplyer()
			break;
		case '/':
			divide_me()
			break;
		case '%':
			divide_me2()
			break;
	}
}



solve([123, 12, '/'])
solve([10, 3, '%'])
solve([112, 0, '/'])
solve([10, 0, '%'])
solve([10, 0, '%'])
solve([10, 12, '+'])
solve([7, 3, '*'])