const employee = require('../lib/employee');
const manager = require('../lib/manager');
const intern = require('../lib/intern');
const engineer = require('../lib/engineer');

function makeCards(employees){
    let cards = [];

    for(let i=0; i< employees.length; i++){
        const employee = employees[i];
        switch(employee.empPos()){
            case 'Manager':
                const manager = new Manager(employee.name, employee.id, employee.email, employee.phone);
                cards.push(generateManagerCard(manager));
                break;

                case 'Intern':
                    const intern = new Intern(employee.name, employee.id, employee.email);
                    cards.push(generateInternCard(engineer));
                break;

            case 'Engineer':
                const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
                cards.push(generateEngineerCard(engineer));
            break;
         
        };
    };
    console.log(cards)
    return cards.join('');
};

let generateManagerCard =(Manager) =>{
    return  `
    <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Manager.empName()}</h3>
      <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.empRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.empId()}</li>
        <li class="list-group-item">Office Number: ${Manager.empPhone()}</li>
        <li class="list-group-item">Email: ${Manager.empEmail()}</li>
      </ul>
    </div>
  </div>
    `
};

let generateInternCard =(Intern) =>{
    return  `
    <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Intern.empName()}</h3>
      <h6 class="card-text"><i class="fa fa-coffee"></i> ${Intern.empRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.empId()}</li>
        <li class="list-group-item">${Intern.empRole()}</li>
      </ul>
    </div>
  </div>
    `
};

let generateEngineerCard = (Engineer) =>{
    return `
    <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Engineer.empName()}</h3>
      <h6 class="card-text"><i class="fa fa-coffee"></i> ${Engineer.empRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.empId()}</li>
        <li class="list-group-item">GitHub ${Engineer.empGitHub()}</li>
        <li class="list-group-item">${Engineer.empRole()}</li>
      </ul>
    </div>
  </div>
    `
};

function empCards(employees){
    console.log(employees)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <title>My Team</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-warning">
      <div class="container">
        <h1 class="display-4 text-center">My Team</h1>
      </div>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
    ${makeCards(employees)}
    </div>
    </body>
    </html>
        ` 
}

module.exports = empCards;