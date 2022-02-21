let n = new Date()
console.log(n);
console.log(n.toLocaleString('bg'));

Date.prototype.my_date = function () {
    let day = new Date()
    let d = day.getDate()
    let m = day.getMonth() + 1
    return `${d < 10 ? '0' + d : d}.${m < 10 ? '0' + m : m}.${day.getFullYear()}`
}

n.my_date().split('.').forEach(x => {
    console.log(x);
})