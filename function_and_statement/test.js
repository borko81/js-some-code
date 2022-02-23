const getStatus = n => {
    const st = {
        [n > 10] : "Ten",
        [n > 20]: "Twenty"
    }
    return st[true]
}


function main(n) {
    const st = {
        [n > 10] : "Ten",
        [n > 20]: "Twenty"
    }
    return st[true]
}


console.log(getStatus(15));