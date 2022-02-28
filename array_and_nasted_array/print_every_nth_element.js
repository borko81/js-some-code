function solve(arr, s) {
    let ar = arr
    let step = s
    let result = []
    for (let x in ar) {
        if (x % step == 0) {
            result.push(arr[x])
        }
    }
    return result
}


let answer = solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6)

console.log(answer);