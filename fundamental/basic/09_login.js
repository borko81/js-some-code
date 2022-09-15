function login(array) {
    const passowrd = array.pop()
    let count = 0

    for (let i of array) {
        count += 1
        if (count == 4) {
            console.log(`User ${i} blocked!`)
            return
        }
        if (i.split("").reverse().join("") == passowrd) {
            console.log(`User ${i} logged in.`)
            return
        } else {
            console.log('Incorrect password. Try again.')
        }
    }
}

login(
    ['sunny','rainy','cloudy','sunny','not sunny']
)