function myFunction() {
    let x = document.activeElement.tagName;
    document.getElementById('test').innerHTML = x;
  }


function addSomething(a, b) {
    let result = a + b;
    document.getElementById('test').innerHTML = result;
    alert(result)
}

let button = document.getElementById('but')

button.addEventListener("click", function (){
    let choice_one = document.forms['foo'].first.value
    let choice_two = document.forms['foo'].last.value
    addSomething(choice_one, choice_two)
});