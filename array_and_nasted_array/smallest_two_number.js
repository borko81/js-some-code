function solve(arr) {
    let result = arr.sort((a, b) => b - a)
    return result.slice(-2).reverse().join("\n")
}


console.log(solve([30, 15, 50, 5]));