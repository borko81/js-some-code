function solve(arr) {
    let temp = arr[0]
    let result = [temp]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < temp) {
            ;
        } else if (arr[i] >= temp) {
            temp = arr[i]
            result.push(arr[i])
        }
    }
    return result
}


function foo(arr) {
    return arr.reduce((a, v) => {
        if (v >= (a[a.length - 1] || arr[0])) {
            a.push(v)
        }
        return a
    }, [])
}

console.log(foo(

    [20,
        3,
        2,
        15,
        26,
        1]


));