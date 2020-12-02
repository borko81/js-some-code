function work_of_week(day, day_name) {
    //return day is wordk or not and concat with his name
    day = Number(day);

    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return `${day_name} is work day`;
            break;
        case 6:
        case 7:
            return `${day_name} is week day`;
            break;
        default:
            return 'What is day?'

    }
}


function check_day_name(day) {
    //Return day name from day number
    day = Number(day);

    if (day === 1 ) {
        return 'Monday';
    } else if (day === 2) {
        return 'Thuesday';
    } else if (day === 3) {
        return 'Wednesday';
    } else if (day === 4) {
        return 'Thursday';
    } else if (day === 5) {
        return 'Friday';
    } else if (day === 6) {
        return 'Saturday';
    } else if (day === 7) {
        return 'Sunday';
    } else {
        return `Not found name day from this number ${day}`;
    }
}


//Main function
function solve(day) {
    let day_of_week = check_day_name(day)
    let result = work_of_week(day, day_of_week)
    return result;
}

//Result
console.log(solve('1'));
console.log(solve('11'));
console.log(solve('6'));