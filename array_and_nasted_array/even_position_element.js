function solve(arr) {
    return arr.map(x => Number(x)).filter((_, x) => x % 2 == 0)
}

console.log(solve(['20', '30', '40', '50', '60']));