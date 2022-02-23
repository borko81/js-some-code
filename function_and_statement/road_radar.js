function solve(speed, area) {
    const zones = {
        "motorway": 130, "interstate": 90,
        "city": 50, "residential": 20
    }
    const zone_speed = zones[area]
    if (speed <= zone_speed) {
        return `Driving ${speed} km/h in a ${zone_speed} zone`
    } else {
        let difference = speed - zone_speed
        if (difference < 20) {
            return `The speed is ${difference} km/h faster than the allowed speed of ${zone_speed} - speeding`
        } else if (difference < 40) {
            return `The speed is ${difference} km/h faster than the allowed speed of ${zone_speed} - excessive speeding`
        } else {
            return `The speed is ${difference} km/h faster than the allowed speed of ${zone_speed} - reckless driving`
        }
    }

}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));