function solve(steps, foot_length, speed) {
    let distance = steps * foot_length

    let person_time = distance / 1000 / speed
    const d = new Date(0, 0)
    d.setSeconds(person_time * 60 * 60)
    d.setMinutes(d.getMinutes() + Math.floor(distance / 500))
    return d.toTimeString().slice(0, 8)
}


console.log(solve(4000, 0.60, 5));