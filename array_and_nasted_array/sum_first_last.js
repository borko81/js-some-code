function solve(arr) {
    return eval(`${arr[0]} + ${arr[arr.length - 1]}`)
}

console.log(solve(['20', '40', '60']));