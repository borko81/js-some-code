function solve(items) {
    let res = [];
    for (i = 1; i <= items.length; i += 2) {
        res.push(items[i]);
    }
    return res.map(x => x * 2).reverse().join(" ")
}


const result = solve([3, 0, 10, 4, 7, 3]);
console.log(result);