const check = ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']

function solve(array) {
    let result = {};
    let temp_name = []
    let temp_calorie = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            temp_name.push(array[i])
        } else {
            temp_calorie.push(array[i])
        }
    }
    for (let i = 0; i < temp_name.length; i++) {
        result[temp_name[i]] = Number(temp_calorie[i]);
    }
    console.log(result);
}


solve(check)