function solve(arg1, arg2) {
    //arg1 is age, arg2 is gender
    let gender = arg2;
    let age = Number(arg1);

    if (gender === 'm') {
        if (age > 16) {
            return "Mr.";
        } else {
            return "Master";
        }

    } else if (gender === 'f') {
        if (age > 16) {
            return 'Ms.';
        } else {
            return 'Miss';
        }

    } else {
        return 'That gebder is unknown what about age.'
    }
}


console.log(solve(39, 'm'));