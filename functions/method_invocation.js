let calculator = {
	operand1: 1,
	operand2: 2,
	add() {
		this.result = this.operand1 + this.operand2;
	}
}

calculator.add()
console.log(calculator.result)
