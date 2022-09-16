function calculator(args) {
    const [a, operand, b] = args
    return eval(a, operand, b).toFixed(2)
}

function calculator_extend(args) {
    const [a, operand, b] = args
    const mapping = {
        '+': () => a + b,
        '-': () => a - b,
        '*': () => a * b,
        '/': () => b > 0 ? a / b : 'Error',
    }
    const result = mapping[operand]()
    if (result !== 'Error') {
        return result.toFixed(2)
    } 
    return result

}

console.log(calculator([5, '+', 10]))
console.log(calculator_extend([5, '/', 0]))