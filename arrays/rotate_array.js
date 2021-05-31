function rotate_array(arr, num) {
    let array = arr;
    let count = num;
    while (count > 0) {
        // let temp_end = array.pop()
        let temp_start = array.shift()
        array.push(temp_start)
        // array.unshift(temp_end)
        count -=1;
    }
    return array
}


console.log(rotate_array(['1',
    '2',
    '3',
    '4'],
    2));