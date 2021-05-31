function solve(input, delimiter) {
    return input.join(delimiter)
}

let result = solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)

console.log(result);