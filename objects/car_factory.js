function solve(input) {

    let engines = [
        { power: 200, volume: 3500 },
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 }
    ].sort((a, b) => a.power - b.power)

    let result = {};
    result['model'] = input.model;
    result['engine'] = engines.filter(el => el.power >= input.power)[0];
    result['carriage'] = {
        type: input['carriage'],
        color: input['color']
    };
    const param = Math.floor(input['wheelsize']);
    const check = param % 2 == 0 ? param - 1 : param;
    result['wheels'] = [check, check, check, check];

    return result;
}


console.log(solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));