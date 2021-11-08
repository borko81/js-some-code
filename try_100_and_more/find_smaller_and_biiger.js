function minMax(array) {
    result = []
    let mmin = Math.min(...array);
    let mmax = Math.max(...array);
    result.push(mmin);
    result.push(mmax);
    console.log(result);
}


minMax([1, 2, 3, 4, 5]) //➞ [1, 5]

minMax([2334454, 5]) //➞ [5, 2334454]

minMax([1]) //➞ [1, 1]