function solve(arr, sep) {
    // Return value from array which divide to sep
    return arr.filter((element, i) => i % sep === 0);
}


console.log(solve(
    [
        '1',
        '2',
        '3',
        '4',
        '5'
    ], 2
))


function addRemoveElement(arguments) {
    let result = [];
    arguments.forEach((element, index) => {
        if (element == "add") {
            result.push(index)
        } else if (element == "remove") {
            result.pop()
        }
    })
    return result
}


console.log(addRemoveElement(
    [
        "add",
        "add",
        "remove",
        "add"
    ]
))