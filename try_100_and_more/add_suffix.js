function add_suffix(suffix) {
    return (text) => {
        return text.concat(suffix)
    }
}

let names = ['first', 'second', 'last']

for(let i=0; i<names.length; i++) {
    console.log(add_suffix("check")(names[i]))
}


