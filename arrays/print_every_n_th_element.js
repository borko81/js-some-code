function solve(inputs, step) {
    let result = []
    for (i = 0; i < inputs.length; i+=step) {
        result.push(inputs[i])
    }
    return result;
}


console.log(solve(['dsa',
    'asd',
    'test',
    'tset'],
    2));