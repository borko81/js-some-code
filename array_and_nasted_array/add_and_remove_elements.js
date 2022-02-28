function solve(arr) {
    let answer = []
    for (let x in arr) {
        if (arr[x] == 'add') {
            answer.push(Number(x) + 1)
        } else {
            answer.pop()
        }
    }
    console.log(answer.length > 0 ? answer.join('\n') : 'Empty');
}


solve(['add',
    'add',
    'remove',
    'add',
    'add']
)