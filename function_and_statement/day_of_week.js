function solve(my_day) {
    let result = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thirsday': 4, 'Friday': 5, 'Sunday': 6, 'Saturday': 7}
    let answer = result[my_day]
    return answer == undefined ? 'error': answer
}

console.log(solve('Monday'));
console.log(solve('Friday'));
console.log(solve('Invalid'));
