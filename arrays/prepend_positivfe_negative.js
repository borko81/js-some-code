function solve(items) {
    let result = [];
    for(let item of items) {
        if (item >= 0) {
            result.push(item)
        } else {
            result.unshift(item)
        }
    }
    return result;
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));