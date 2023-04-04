const table = document.querySelector("#table");
const tableHeading = [{name:'NAME'},{age:'AGE'},{email:'EMAIL'}];
const person = [{name:"Praveen",age:21,email:"raipraveen###@gmail.com"},{name:"Praveen",age:21,email:"raipraveen###@gmail.com"},{name:"Praveen",age:21,email:"raipraveen###@gmail.com"}];
// table head
let thead = table.createTHead();
// inserted row in table head
let theadRow = thead.insertRow();
// created cell for n number of heading text or data
tableHeading.forEach(element => {
for (const key in element) {
    let theadRowCell = theadRow.insertCell();
    theadRowCell.appendChild(document.createTextNode(Object.values(element)[0]));
}
});
// table body 
let tbody = table.createTBody();
// use of foreach to create row for n number of data in person list
person.forEach(element => {
    let tbodyRow = tbody.insertRow();

for (const key of tableHeading) {
    let tbodyRowCell = tbodyRow.insertCell();
    tbodyRowCell.appendChild(document.createTextNode(element[Object.keys(key)[0]]));
}
});
// table footer
let tfooter= table.createTFoot();
// table footer row
let tFooterRow = tfooter.insertRow();
let tFooterRowtd = tFooterRow.insertCell();
tFooterRowtd.appendChild(document.createTextNode("Footer"));
// set attribute for  td to take span of 3
tFooterRowtd.setAttribute("colspan" ,"3");
// align the text in the center
tFooterRow.style.textAlign="center";

let obj = {name:"Praveen",age:21,email:"raipraveen###@gmail.com"};
console.log(obj.name);