function solve(obj) {
    let check = obj['dizziness']
    if (check) {
        let new_water = obj['weight'] * 0.1 * obj['experience']
        obj['levelOfHydrated'] += new_water
        obj['dizziness'] = false
    }
    return obj
}

console.log(solve(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }

));