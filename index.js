//install packacges
const inquierer = require('inquirer');
const fs = require('fs');
// const manager = require('./lib/manager');
// const engineer = require('./lib/engineer');
// const inter = require('./lib/intern');
employees =[];

// make inquierer prompts

// make prompts for employee 
// prompt for engineer 
// when selected engineer prompt for name, id, email, GitHub username
function engineerQ(){
    inquierer.prompt([
        {
            name: 'name',
            message: 'what is your engineer\'s name?'
        },
        {
            name: 'id',
            message: 'what is your ingeneer\'s id?'
        },
        {
            name: 'email',
            message: 'what is your engineer\'s email address?'
        },
        {
            name: 'github',
            message: 'what is your engineer\'s GitHub username?'
        },
        {
            type: 'list',
            name: 'addEmp',
            message: 'do you want to add another employee?',
            choices: ['intern','engineer','none']
        }
    ])
    .then((engineerAns)=>{
        const engineer = new Engineer(engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.github)
        employees.push(engineer);
        switch(engineerAns.addEmp){
            case 'engineer':
                engineerQ();
                break;
            case 'intern':
                internQ();
                break;
            default:
                writeToFile();
        }
    })
} 

// prompt for intern
//  when selected intern prompt for name, id, email, school, then taken back to menu
const internQ = () =>{
    inquierer.prompt([
        {
            name: 'name',
            message: 'what is your inter\'s name?'
        },
        {
            name: 'id',
            message: 'what is your intern\'s id?'
        },
        {
           name: 'email',
           message: 'what is your intern\'s email address?' 
        },
        {
            name: 'school',
            message: 'what school does/did your intern go to?'
        }
    ])
    .then((internAns)=>{
        const engineer = new Intern(internAns.name, internAns.id, internAns.email, internAns.github)
        employees.push(intern);
        switch(internAns.addEmp){
            case 'engineer':
                engineerQ();
                break;
            case 'intern':
                internQ();
                break;
            default:
                writeToFile();
        }
    })
}

// prompt for manager 
// prompt for managers name, employee id, email, and office number
const managerQ = () =>{
    inquierer.prompt([
    {
        name: 'name',
        message: 'What is your manager\'s name?'
    },    
    {
        name: 'id',
        message: 'what is your managers\`s id?'
    },
    {
        name: 'email',
        message: 'what is your manager\'s email address?'
    },
    {
        name: 'phone',
        message: 'what is your managers office phone number?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'do you want to add another employee?',
        choices: ['intern','engineer','none']
    }
    ])
    .then((managerAns)=>{
        const manager = new Manager(managerAns.name, managerAns.id, managerAns.email, managerAns.phone)
        employees.push(manager);
        console.log(employees)
        switch(managerAns.addEmp){
            case 'engineer':
                engineerQ();
                break;
            case 'intern':
                internQ();
                break;
            default:
                writeToFile();
        }
    })
}

function empCards(fileName,data){
    fs.writeFile(fileName,data,(err)=>{
        err?console.error(err): console.log(data)
    })
}



// make tests employee
// make test for engineer 
// make test for intern
// make test for manager 

function init(){
    managerQ();
}

init();