function get_average(items) {
    let sum = 0;
    let l = items.length;
    for (let i of items) {
        sum += Number(i);
    }
    return (sum / l).toFixed(2);
}


function solve(input) {
    let name = input[0];
    let grade = [];
    let index = 0;
    let for_out = 0;

    while (index < input.length - 1) {
        index++;
        let temp = Number(input[index]);
        if (temp < 4) {
            for_out += 1;
            if (for_out == 2) {
                console.log(`Out after ${index - 1}`);
                break;
            }
        } else {
            grade.push(temp);
        }
    }
    if (for_out < 2){
        console.log(`${name}: ${get_average(grade)}`);
    }
}


solve(["Mimi",
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])