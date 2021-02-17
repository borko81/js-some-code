//document.getElementById('show').textContent = new Date();

// Use queryselector and tolocale option

const current_date = new Date();
const show_format_date = {
    h: current_date.getHours(),
    m: current_date.getMinutes(),
    my_form: function () {
        if (this.m < 10) {
            return `${this.h}:0${this.m}`
        } else {
            return `${this.h}:${this.m}`
        }
        
    }
}

//document.querySelector("#show").textContent = current_date.toLocaleString('bg');

// Format data and time
const here_is_the_tesult = document.querySelector("#show");
//here_is_the_tesult.textContent =  Object.values(show_format_date).join(":");
here_is_the_tesult.textContent = show_format_date.my_form()
