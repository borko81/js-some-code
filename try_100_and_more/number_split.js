function numberSplit(number) {
    let result = []
    let middle = number / 2;
    if (middle != parseInt(middle)) {

        let a = middle < 0 ? Math.floor(middle) : Math.ceil(middle);
        let b = Math.trunc(middle)
        result = [Math.min(a, b), Math.max(a, b)]


    } else {
        result = [middle, middle]
    }
    console.log(result)
}


numberSplit(4) //➞ [2, 2]

numberSplit(10) //➞ [5, 5]

numberSplit(11) //➞ [5, 6]

numberSplit(-9) //➞ [-5, -4]