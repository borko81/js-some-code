let a = 051

let e = parseInt(1010, 2)
console.log(e);

function getScore() {
    return [70, 80, 90]
}

console.log(getScore().reduce((a, b) => a + b , 0))
let score = getScore()
console.log(...score);
let [x, y, z] = getScore()
console.log(x, y, z);

function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}

let [sum, average, diference] = stat(20, 10)
console.log(sum, average, diference);