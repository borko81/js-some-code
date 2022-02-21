function solve(x) {
    let check_type = typeof x
    if (check_type != 'number') {
        return `We can not calculate the circle area, because we receive a ${check_type}.`
    }
    let result = Math.pow(x, 2) * Math.PI
    return result.toFixed(2)
}


console.log(solve(5));
console.log(solve('name'));