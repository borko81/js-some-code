const cites = ["Sydney", "London", "Auckland", "Tokyo", "Bangkok"];
const params = ["1", "2", "3", "4", "5"];
// Two obj
const result = {};


cites.forEach((key, position) => {
    result[key] = params[position]
})

function showme_something(obj) {
    let r = "";
    Object.keys(obj).forEach(x => r += `${x} - ${obj[x]}<br />`);
    return r;
}

document.querySelector("#result").innerHTML = showme_something(result);