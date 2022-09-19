function merge_arrays(arr1, arr2) {
    
    const result = arr1.map((x, i) =>  {
        return i % 2 === 0 ? Number(x) + Number(arr2[i]) : x + arr2[i]
    })
    return result.join('-')
}

console.log(merge_arrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
))