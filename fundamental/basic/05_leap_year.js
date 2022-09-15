function leap_year(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 'yes' : 'no'
}


const income_data = [
    1984,
    2003,
    4
]

income_data.forEach(x => {
    console.log(leap_year(x))
})