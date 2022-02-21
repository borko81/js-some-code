function solve(x, y, str) {
    let result;
    switch (str) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '%': result = x % y; break;
        case '/':
            if (y === 0) {
                return 'WTF'
            } else {
                result = x / y
                break
            }
    }
    return result
}


function solve_two(x, y, str) {
    let result = {'+': x + y, '-': x - y}
    return result[str]
}

console.log(solve_two(5, 6, '+'));