function solve(array, step) {
    let arr = array
    let count = step

    for (let i=0; i<count; i++) {
        arr.unshift(arr.pop())
    }
    return arr.join(' ')
}


console.log(solve(['1',
    '2',
    '3',
    '4'],
    2));

