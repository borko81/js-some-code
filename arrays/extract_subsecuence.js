function solve(arguments) {
    let result = []

    arguments.forEach(x => {
        if (x >= result[result.length - 1] || result.length === 0) {
            result.push(x)
        }
    })

    return result;
}


console.log(solve(
    [
        1,
        3,
        8,
        4,
        10,
        12,
        12,
        3,
        2,
        24,
    ]
));