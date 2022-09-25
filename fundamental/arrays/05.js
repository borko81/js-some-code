function max_number(arr) {
    const array = arr.map(x => Number(x))
    let result = []

    for (let i = 0; i < array.length; i++) {
        let temp = array[i]
        let error = false
        for (let k = i + 1; k < array.length; k++) {
            if (array[k] >= temp) {
                error = true
                break
            }
        }
        if (!error) {
            result.push(temp)
        }
    }
    return result.join(" ")

}


function solve_with_hight_order(arr) {
    return arr.filter((num, position) => arr.slice(position + 1).every(x => x < num)).join(" ")
}

console.log(
    solve_with_hight_order(
        [14, 24, 3, 19, 15, 17]
    )
)