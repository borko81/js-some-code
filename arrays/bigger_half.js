function solve(arr) {
    let middle = arr.length / 2;
    let sorted_arr = arr.sort((a, b) => a - b);
    return sorted_arr.splice(middle, sorted_arr.length - 1);
}


let result = solve([3, 19, 14, 7, 2, 19, 6]);
console.log(result);
