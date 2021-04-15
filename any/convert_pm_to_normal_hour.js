function timeConvertor(time) {
    let PM = time.match('PM') ? true : false;
    time = time.replace('PM', '');
    time = time.replace('AM', '');

    time = time.split(":")
    let min = time[1];
    let sec = time[2];

    if (PM) {
        let hour = parseInt(time[0], 10) + 12;
        console.log(`${hour}:${min}:${sec}`);
    } else {
        let hour = time[0];
        console.log(`${hour}:${min}:${sec}`);
    }
}



timeConvertor('07:03:15PM'); // "19:03:15"

timeConvertor('1:53:55AM'); // "1:53:55"