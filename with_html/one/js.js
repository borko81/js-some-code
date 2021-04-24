function myFunction() {
    let x = document.activeElement.tagName;
    document.getElementById('test').innerHTML = x;
  }


function addSomething(a, b) {
    let result = a + b;
    document.getElementById('test').innerHTML = result;
}

function changeColorBody() {
    document.body.style.background = 'yellow'
}

let button = document.getElementById('but')
let color_button = document.getElementById("changecolor")


button.addEventListener("click", function (){
    let choice_one = document.forms['foo'].first.value
    let choice_two = document.forms['foo'].last.value
    addSomething(choice_one, choice_two)
});

color_button.addEventListener("click", changeColorBody)