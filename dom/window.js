// Get url from form open used window.open
const but = document.getElementById("go");
but.addEventListener("click", function () {
    const url = document.getElementById("url");
    
    // Open direct new url with another window
    //window.open(url.value);


    // Add time to page
    const t = new Date();
    const h = t.getHours();
    const m = t.getMinutes();

    // Open url with timeout, in same window
    window.setTimeout(function () {
        location.href = url.value
    }, 1500)

    document.getElementById("result").innerText = `${h}:${m}`;
}, false)