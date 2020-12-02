function solve(h, m) {
    let hour = Number(h);
    let minute = Number(m);
    let changeTime = minute + 15;
    
    let min_to_hour = Math.trunc(changeTime / 60);
    hour += min_to_hour;
    minute_residue = changeTime % 60;

    //Change hour when is equal to 24 to 0.
    if (hour == 24) {
        hour = 0;
    }

    if (minute_residue < 10) {
        //Add zero if ninute is less then 10.
        return `${hour}:0${minute_residue}`;
    } else {
        return `${hour}:${minute_residue}`;
    }
    
}

console.log(solve('23', '59'));

