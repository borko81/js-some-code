function solve(arr) {
    let result = {}
    for (let x in arr) {
        if (x % 2 == 1) {
            result[arr[x - 1]] = arr[x]
        }
    }
    return result
}

console.log(solve(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
));