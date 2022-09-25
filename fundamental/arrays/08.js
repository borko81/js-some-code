function magic_sum(array, search_value) {
    let result = []
    const arr_length = array.length

    for (let i = 0; i < arr_length; i++) {

        let temp = array[i]
        let temp_elements = [array[i]]

        for (let k = i + 1; k < arr_length; k++) {
            if (temp + array[k] == search_value) {
                temp_elements.push(array[k])
                result.push(temp_elements.join(" "))
            }
        }

    }

    return result.join("\n")

}


console.log(magic_sum(
    [1, 2, 3, 4, 5, 6],
    6
))
