function solve(arr) {
    return `
${arr.reduce((a, b) => a + b)}
${arr.reduce((a, b) => a + 1 / b )}
${arr.join("")}
    `
}

console.log(solve([1, 2, 3]));

console.log([1, 2, 3].map(x => 1 / x).reduce((x, y) => x + y));