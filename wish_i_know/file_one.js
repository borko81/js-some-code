function difference(n) {
    if (n <= 13) {
        return 13 - n
    } else {
        return n -13
    }
}

function check_is_true(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50))
}

function remove_character(str, pos) {
    let part_one = str.substring(0, pos)
    let part_two = str.substring(pos + 1, str.length)
    return `${str}: ${part_one + part_two}`
}

function vowel_count(str) {
    return str.replace(/[^ayoue]/g, "").length
}
