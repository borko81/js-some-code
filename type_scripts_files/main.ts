var person = {Fname:"Rajeev", Lname:"Johari", Age:40};
var perproperty;
for (perproperty in person) {
console.log(perproperty + ": " + 
person[perproperty ]);
}