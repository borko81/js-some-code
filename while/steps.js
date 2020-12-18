function solve(inputs) {
    let target = 10000;

    while (inputs.length > 0) {
        let step = inputs.shift();
        if (step !== 'Going home') {
            target -= step;
            if (target <= 0) {
                console.log("Goal reached! Good job!");
                console.log(`${0 - target} steps over the goal!`);
                break;
            }
        }
    }
    if (target > 0) {
        console.log(`${target} more steps to reach goal.`);
    }
}




solve(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])