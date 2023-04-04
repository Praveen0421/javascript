// creating table
// table heading
let tableHeader = {
  firstname: "FirstName",
  lastname: "LastName",
  email: "Email",
};
// selecting table element
const table = document.querySelector("table");

// creating thead in table
const tHead = table.createTHead();

// creating row in thead
const headerRow = tHead.insertRow();

// for in loop
// to create table cell use table heading key
for (const key in tableHeader) {
  const thCell = headerRow.insertCell();
  let theading = tableHeader[key];
  thCell.appendChild(document.createTextNode(theading));
}
// creating tbody
const tBody = table.createTBody();

// function for fetching data from api or local server
// this function also take value from server and put it into table cell
async function getResponse() {
  const fetchValue = await fetch("http://localhost:3000/user");
  const response = await fetchValue.json();
  // creating row
  response.forEach((element) => {
    const bodyRow = tBody.insertRow();
    // get key from tableHeader to access value of server object
    for (const key in tableHeader) {
      // creating cell
      const tbCell = bodyRow.insertCell();
      const tbData = element[key];
      // putting data in the cell
      tbCell.appendChild(document.createTextNode(tbData));
    }
  });
}


// function for adding data to the server

function addResponse() {
  const userFirstName = document.querySelector('#firstname').value;
  const userLastName = document.querySelector('#lastname').value;
  const userEmail = document.querySelector('#email').value;

  fetch("http://localhost:3000/user", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      firstname: userFirstName,
      lastname: userLastName,
      email: userEmail
    })
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
}
