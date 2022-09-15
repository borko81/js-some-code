function division (number) {
    let result = null
    const number_whith_check = [2, 3, 6, 7, 10]

    for (let check of number_whith_check) {
        if (number % check == 0) {
            result = check
        }
    }

    console.log(result !== null ? `The number is divisible by ${result}` : 'Not divisible')

}



const input = [30, 15, 12, 1643]

input.forEach(x => {
    division(x)
})