let speed = "40.50"

function solve(speed) {

    //If want to check real number only
    //speed = Math.floor(Number(speed))

    //If want to check number as float point number

    let out_of_limit = 0;

    if (speed <= 10) {
        out_of_limit = speed;
        return 'Slow';
    } else if (speed <= 50) {
        out_of_limit = speed - 10;
        return `Average out limit of previous speed: ${out_of_limit}`;
    } else {
        out_of_limit = speed - 50;
        return `Fase ount limit of previous speed ${out_of_limit}`
    }
}

console.log(solve(speed));