function boiler(time) {
    console.log('Start');
    setTimeout(() => {
        setTimeout(() => {
            console.log('That is nested');
        }, 500)
        console.log('End');
    }, time)
}

boiler(1000)
console.log('First Task');