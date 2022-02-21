function solve(a, b, c) {
    let [a_l, b_l, c_l] = [a.length, b.length, c.length]
    function my_sum(acc, n) {
        return acc + n
    }
    let total_l = [a_l, b_l, c_l].reduce(my_sum, 0)
    console.log(total_l);
    console.log(Math.floor(total_l / 3));

}


solve('pasta', '5', '22.3')