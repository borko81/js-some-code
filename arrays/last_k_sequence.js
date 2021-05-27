function solve(n, k) {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            result.push(1)
        } else if (i >= 1 && i < k) {
            result.push(result.reduce((a, b) => a + b));
        } else {
            let temp = result.slice(i - k, i);
            result.push(temp.reduce((a, b) => a + b));
        }
    }
    console.log(result);
}


solve(8, 2)
