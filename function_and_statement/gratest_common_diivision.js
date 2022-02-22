function solve(x, y) {
    let answer = -9999;
    for (let i = 1; i<=Math.min(x, y); i++) {
        if ((x % i == 0 && y % i == 0)) {
            answer = i
        }
    }
    return answer
}


const result = solve(2154, 458)
console.log(result);