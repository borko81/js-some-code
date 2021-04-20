//If function is preceded with this, it is a constructor invocation

function main(arg1, arg2) {
	this.arg1 = arg1;
	this.arg2 = arg2;
}

let check = new main(10, 100)
console.log(check.arg1 + check.arg2)

