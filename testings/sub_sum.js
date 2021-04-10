function sumSum(arr, first, end) {
    if (Array.isArray(arr) === false) {
        return NaN;
    }
    if (first < 0) {
        first = 0;
    }
    if (end > arr.length) {
        end = arr.length;
    }
    return arr.slice(arr, end).reduce((a, b) => a + Number(b), 0);
}


console.log(sumSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumSum([10, 'twenty', 30, 40], 0, 2));
console.log(sumSum([], 1, 2));
console.log(sumSum('text', 0, 2));