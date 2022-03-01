function solve(arr) {
    let result = arr.sort((a, b) => a.length - b.length === 0 ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) : a.length - b.length)
    return result
}

console.log(solve(
    ['test',
        'Deny',
        'omen',
        'Default']
));