function write_triangle(n) {

    for (let i = 1; i <= n; i++) {
        let answer = []
        for (let k = 1; k <= i; k++) {
            answer.push(i)
        }
        console.log(answer.join(""))
    }

}


const inpuit_values = [3, 5, 6]

inpuit_values.forEach(x => {
    write_triangle(x)
})