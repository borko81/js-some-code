function solve(input) {
    let answer = {}
    input.forEach(x => {
        let [town, pop] = (x.split(' <-> '));
            town = town
            pop = Number(pop)
            answer[town] = (answer[town] || 0) + pop
    })
    return Object.entries(answer).map(x => `${x[0]}: ${x[1]}`).join('\n')
}


console.log(solve(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));

