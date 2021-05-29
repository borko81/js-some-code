function solve(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(element => {
        element.forEach(x => biggestNum = Math.max(biggestNum, x))
    })
    return biggestNum;
}


const result = solve([[20, 50, 10],
[8, 33, 145]])

console.log(result);