function solve(arr, flav_one, flav_two) {
    let result = []
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] == flav_one) {
            while (arr[i] != flav_two) {
                result.push(arr[i])
                ++i;
            }
            result.push(arr[i])
            break
        }
    }
    return result
}


console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));