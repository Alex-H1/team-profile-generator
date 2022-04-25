//install packacges
const inquierer = require('inquirer');
const fs = require('fs');

team =[];
// make inquierer prompts 
const managerQ = () =>{
    inquierer.prompt([
    {
        name: 'name',
        message: 'What is your manager/s name?'
    },    
    {
        name: 'id',
        message: 'what is your managers/s id?'
    },
    {
        name: 'email',
        message: 'what is your manager/s email address?'
    },
    {
        name: 'phone',
        message: 'what is your managers office phone number?'
    },
    ])
}

// make prompts for employee 
// prompt for engineer 
// prompt for intern
// prompt for manager 

// prompt for managers name, employee id, email, and office number
// then prompted for option to add engineer intern or finish building team 
// when selected engineer prompt for name, id, email, GitHub username, then taken back to menu
//  when selected intern prompt for name, id, email, school, then taken back to menu


// make tests employee
// make test for engineer 
// make test for intern
// make test for manager 
