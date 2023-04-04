const table = document.getElementById('table');
const tableHeaders = [{ name: 'NAME' }, { age: 'AGE' }, { email: 'EMAIL' }];


const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHeaders.forEach(element => {
    const td = thRow.insertCell();
    const value = Object.values(element)[0];
    td.appendChild(document.createTextNode(value));
});

const tBody = table.createTBody();

async function getEmployees() {
    let response;

    try {
        response = await fetch('http://localhost:3000/user');
        const employees = await response.json();
        createTableBody(employees);
        console.log(employees);
    } catch (error) {
        console.error(error);
    }
}

function addEmployees() {

const userName=document.querySelector("#name").value;
const age=document.querySelector("#age").value;
const email=document.querySelector("#email").value;

    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: userName,
            lastname: age,
            email: email
        })
    })


}

function createTableBody(employees) {
    employees.forEach(element => {
        const tr = tBody.insertRow();
        tableHeaders.forEach(header => {
            const key = Object.keys(header)[0];
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(element[key]));
        })

    });
}
const userName=document.querySelector("#name");
const age=document.querySelector("#age");
const email=document.querySelector("#email");
userName.addEventListener("click",validate);
function validate(){
    let inputValue = userName.value;
    if (inputValue===undefined) {
        userName.setAttribute("required","");

    }

}
console.log(userName);