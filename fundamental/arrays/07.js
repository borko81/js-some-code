function found_max_sequence(arr) {
    let result = []
    l = arr.length

    for (let i = 0; i < l; i++) {
        temporary_value = arr[i]
        temp_array = [temporary_value]

        for (let k = i + 1; k < l; k++) {
            if (arr[k] !== temporary_value) {
                i = k - 1
                break
            }
            temp_array.push(temporary_value)


        }
        if (temp_array.length > 1) {
            if (temp_array.length > result.length) {
                result = temp_array
            }
        }
    }
    return result.join(" ")
}


console.log(
    found_max_sequence(
        [0, 1, 1, 5, 2, 2, 6, 3, 3]
    )
)