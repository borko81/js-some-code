function solve(arr) {
    let result = []
    arr.forEach(x => {
        let data = {}
        let [name, level, item] = x.split(' / ')
        data['name'] = name
        data['level'] = level
        data['items'] = item.split(', ')
        result.push(JSON.stringify(data))
    })
    return result
}

const result = solve(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'] 
)

console.log(result);