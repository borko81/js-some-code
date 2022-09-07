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

function outer() {
	function inner () {
		console.log(`From inenr`)
	}
	return inner
}

outer()()

function logged_info(user_name) {
	const expected_name = 'borko'
	function inner () {
		if (user_name == expected_name) {
			console.log('Ok');
		} else {
			console.log('Error in credential');
		}
	}
	return inner
}

const user_detail = logged_info('borko')
user_detail()

function bank_balance(name, current_balance) {
	let balance = current_balance
	function show() {
		console.log(`${name} has ${balance}`)
	}
	function deposite(sum) {
		balance += sum
		show()
	}
	function withdraw(sum) {
		if (sum <= balance) {
			balance -= sum
			show()
		} else {
			console.log('Error')
		}
	}
	return {show:show, deposite:deposite, withdraw:withdraw}
}

const user = bank_balance('User', 100)
user.deposite(100)
user.withdraw(100)
