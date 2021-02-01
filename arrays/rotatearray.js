function solve(arguments, nums) {
    for (let i = 0; i < nums; i++) {
        let temp = arguments.pop()
        arguments.unshift(temp)
    }
    return arguments.join(' ')
}


console.log(solve(
    [
        '1',
        '2',
        '3',
        '4'
    ], 2
));