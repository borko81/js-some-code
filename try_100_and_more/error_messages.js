messages = {
    1 : "Check the fan",
    2 : "Emergency stop",
    3 : "Pump Error",
    4 : "c",
    5 : "Temperature Sensor Error",
}


function error(num) {
    console.log(messages[num] + `: e${num}`);
}

error(1) //➞ "Check the fan: e1"

error(2) //➞ "Emergency stop: e2"

error(3) //➞ "Pump Error: e3"