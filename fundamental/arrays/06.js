function equal_sums(array) {
    let result = []

    if (array.length == 1) {
        return 0
    }

    let outisede_sum = 0
    for (let i = 0; i < array.length; i++) {
        outisede_sum += array[i]
        let inside_sum = 0
        for (let k = i + 2; k < array.length; k++) {
            inside_sum += array[k]
        }
        if (outisede_sum == inside_sum) {
            result.push(i + 1)
        }
    }
    if (result.length == 0) {
        return 'no'
    }
    return result
}


console.log(
    equal_sums(
        [1, 2, 3]
    )
)