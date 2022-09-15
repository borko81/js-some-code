function vacation (aray) {
    let price = 0

    const [people_number, type, days] = aray;
    
    const price_mapping = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.8,
            'Sunday': 10.46
        },
        'Business': {
            'Friday': 10.9,
            'Saturday': 15.6,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.5
        }

    }

    function reduce_for_students(discount=15 / 100) {
        price = price - price * discount
        return price
    }

    function reduce_for_business(discount=10 / 100) {
        price = price - price_mapping[type][days] * people_number
        return price
    }
    
    function reduce_for_regular(discount=5 / 100) {
        price = price - price * discount
        return price
    }

    price = price_mapping[type][days] * people_number

    if (type === 'Students' && people_number >= 30) {
        price = reduce_for_students()

    } else if (type === 'Business' && people_number >= 100){
        price = reduce_for_business()

    } else if (type === 'Regular' && people_number >= 10 && people_number <= 20) {
        price = reduce_for_regular()
    }

    return `Total price: ${price.toFixed(2)}`
}

console.log(vacation([30,
    "Students",
    "Sunday"]))

console.log(vacation([40,
    "Regular",
    "Saturday"]))