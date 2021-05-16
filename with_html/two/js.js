window.addEventListener('load', function (){
	let p = document.getElementsByTagName('p');
	p[0].innerHTML = Date()
	let search_div = document.querySelector('.check');
	search_div.style.color = 'blue'

	let b = document.querySelector('#push_button');

	b.addEventListener('click', function (){
		search_div.style.color = 'red'
		b.innerHTML = 'now in red'
	});

	let para = document.createElement('p');
	let textnode = document.createTextNode("some radnom line");
	para.appendChild(textnode);
	let s = document.querySelector("#div1");
	s.appendChild(para)

})

function runFunction(id) {
	id.style.color = ''
}	


