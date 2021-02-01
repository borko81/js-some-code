function solve(numbers) {
    /*
        Sort arra, then use slice for return from middle to end
    */
    return numbers
        .sort((a, b) => a - b)
        .slice(numbers.length / 2)
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 17, 2, 19, 6]));