function aray_roration(array, how_many) {
    let arr = array.map(x => Number(x))
    let replace_number = Number(how_many)

    while (replace_number > 0) {
        arr.push(arr.shift())
        replace_number--
    }

    return arr

}


console.log(
    aray_roration(
        // Expect [4 15 31 2]
        [2, 4, 15, 31], 5
    )
)