room_price = {
    'room for one person': 18,
    'apartment': 25,
    'president apartment': 35
}

function solve(arg1, arg2, arg3) {
    //Calculcate sum of night's
    let night = Number(arg1) - 1;
    let room_type = arg2;
    let evaluation = arg3;
    let total_price = night * room_price[room_type];

    //Check for discount for num day
    if (room_type === 'apartment' && night < 10){
        total_price = total_price - total_price * 0.3;
    } else if (room_type === 'apartment' && 10 <= night && night <= 15){
        total_price = total_price - total_price * 0.35;
    } else if (room_type === 'apartment' && night > 15){
        total_price = total_price - total_price * 0.50;
    } else if (room_type === 'president apartment' &&  night < 10) {
        total_price = total_price - total_price * 0.10;
    } else if (room_type === 'president apartment' && 10 <= night && night <= 15) {
        total_price = total_price - total_price * 0.15;
    } else if (room_type === 'president apartment' && night > 15) {
        total_price = total_price - total_price * 0.20;
    }
    //Check for evaluation dicount

    if (evaluation === "positive") {
        total_price += total_price * 0.25
    } else {
        total_price -= total_price * 0.10
    }

    return total_price.toFixed(2);
}



//arg1 = day - noght = day - 1
//arg2 = room_type
//arg3 = evaluation
console.log(solve("14", "apartment", "positive"));
console.log(solve("30", "president apartment", "negative"));
console.log(solve("12", "room for one person", "positive"));
console.log(solve("2", "apartment", "positive"));