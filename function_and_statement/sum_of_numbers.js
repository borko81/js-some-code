function solve(n, m) {
    let [x, y] = [parseInt(n), parseInt(m)]
    let my_arr = []
    for (let i=x; i<=y; i++) {
        my_arr.push(i)
    }

    return my_arr.reduce((a, b) => a + b)
}

console.log(solve('1', '5'));
console.log(solve('-8', '20'));