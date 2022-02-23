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



function combo(...arr) {
    let n = Number(arr.shift())
    const operator = {
        add: x => n+=1,
        divide: x => n/=2
    }
    arr.forEach(x => console.log(operator[x](n)))
}

combo(30, 'add', 'add', 'divide');