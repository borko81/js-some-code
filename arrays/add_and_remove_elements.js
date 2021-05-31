function solve(elemnts) {
    let result = [];
    for (i = 0; i < elemnts.length; i++) {
        if (elemnts[i] == 'add') {
            result.push(i + 1)
        } else if (elemnts[i] == 'remove') {
            if (result.length == 0) {
                result.push('Empty')
            }
            else {
                result.pop()
            }
        }
    }
    return result.join('\n')
}


let result = solve(['remove',
    'remove',
    'remove'])

console.log(result);