function roundin(number, decimal_places) {

    // parseFloat remove trailing zero
    // toFixed put decimal places
    
    return parseFloat(number.toFixed(decimal_places < 15 ? decimal_places : 15))

}


console.log(roundin(10.5,3))