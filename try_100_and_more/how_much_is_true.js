/*
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
*/

function countTrue(arr) {
    if (arr.length === 0) {
        console.log(0)
    }
    let result = arr.filter(x => x === true)
    console.log(result.length)
}

countTrue([false, false, false, false])
