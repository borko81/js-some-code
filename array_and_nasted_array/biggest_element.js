function solve(arr) {
    let big = -999
    for (let i=0; i<arr.length; i++) {
        for (let x=0; x<arr[i].length; x++) {
            big = (arr[i][x] > big ? arr[i][x] : big)
        }
    }
    return big
}

console.log(solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));