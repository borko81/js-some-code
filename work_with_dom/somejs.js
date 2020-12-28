//sum of tables
let sum = 0;
let cells = document.querySelectorAll("td + td");

for (let i=0; i<cells.length; i++) {
	sum += parseFloat(cells[i].firstChild.data);
}

//Frst cell
let newRow = document.createElement("tr");
let firstCell = document.createElement("td");
let firstCellText = document.createTextNode("Sum:")
firstCell.appendChild(firstCellText)
newRow.appendChild(firstCell)

//Second cell
let secondCell = document.createElement("td");
let secondCellText = document.createTextNode(sum)
secondCell.appendChild(secondCellText)
newRow.appendChild(secondCell)

//Add newRow to parent table with id table1
document.getElementById("table1").appendChild(newRow)

// Take datatime and convert to string
let data = new Date().toString()
//Remove all str, leave only digit
let mydate = data.replace(/\D/g, " ").trim()
mydate = mydate.split(" ")
document.getElementById("todaydate").innerHTML = mydate[2] +":"+mydate[3]

//Search in string
function searchMe() {
	let textForSearch = document.getElementById("mysearch").value;
	let str = document.getElementById("text").innerText;
	let result = [];
	let pos = 0;

	while(true){
		if (textForSearch.length == 0) {
			break;
		}
		let found = str.indexOf(textForSearch, pos)
		if (found == -1) {
			break;	
		} else {
			console.log(found)	
			alert(str.slice(found, textForSearch.length))
		}
		pos = found + 1;
	}
}