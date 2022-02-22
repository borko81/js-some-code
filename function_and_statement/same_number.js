function solve(number) {
    let answer = []
    let check = number.toString().split("")
    const c = Number(check[0])
    if (check.every(x => Number(x) == c)) {
        answer.push(true)
    } else {
        answer.push(false)
    }
    let s = check.map(x => Number(x)).reduce((a, b) => a + b, 0)
    answer.push(s)
    return answer.join("\n")

}

console.log(solve(2222));