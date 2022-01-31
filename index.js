// adding required packages for the app to run
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template')

// establishing the array to push user input to
const employeesArr = [];

// first set of questions to prompt user for manager information
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is your team manager's name?`,
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter a name for your manager!');
                      return false;
                    } 
                }        
            },
            {
                type: 'input',
                name: 'id',
                message: `What is your team manager's employee ID?`,
                validate: idInput => {
                    if (idInput) {
                      return true;
                    } else {
                      console.log(`Please enter your manager's employee ID!`);
                      return false;
                    } 
                }        
            },
            {
                type: 'input',
                name: 'email',
                message: `What is your team manager's email address?`,
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                      console.log(`Please enter your manager's email address!`);
                      return false;
                    } 
                }        
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `What is your team manager's office number?`,
                validate: officeInput => {
                    if (officeInput) {
                      return true;
                    } else {
                      console.log(`Please enter your manager's office number!`);
                      return false;
                    } 
                }        
            },
        ])
        // after the prompts it adds to the Manager class & pushes the input to the employee array, then calls addEmployee prompt
        .then(data => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employeesArr.push(manager);
            addEmployee();
        })
}

// prompt to give users the option to add an engineer, intern, or complete the team
const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add another member to your team?',
                choices: ['Add an Engineer', 'Add an Intern', 'I am Finished Building my Team'],
            },
        ])
        // app will respond based on the user's selection to call the appropriate next function
        .then(data => {
            if (data.addEmployee === 'Add an Engineer') {
                console.log(`
                ===============
                Add an Engineer
                ===============
                `);
                addEngineer()
            } else if (data.addEmployee === 'Add an Intern') {
                console.log(`
                =============
                Add an Intern
                =============
                `);                
                addIntern()
            } else {
                console.log(`
                ====================
                Team Profile Created
                ====================
                `);
                let pageData = generatePage(employeesArr)                
                writeToFile('./dist/index.html', pageData)
            }
    
        });
}

// prompts for adding an Engineer to the team
const addEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your team engineer's name?`,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name for your engineer!');
                  return false;
                } 
            }        
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your team engineer's employee ID?`,
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's employee ID!`);
                  return false;
                } 
            }        
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your team engineer's email address?`,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's email address!`);
                  return false;
                } 
            }        
        },
        {
            type: 'input',
            name: 'github',
            message: `What is your team engineer's GitHub username?`,
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's GitHub username!`);
                  return false;
                } 
            }        
        },
    ])
    .then(data => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeesArr.push(engineer);
        addEmployee();
    })
}

// prompts for adding an Intern to the team
const addIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your team intern's name?`,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name for your intern!');
                  return false;
                } 
            }        
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your team intern's employee ID?`,
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log(`Please enter your intern's employee ID!`);
                  return false;
                } 
            }        
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your team intern's email address?`,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log(`Please enter your intern's email address!`);
                  return false;
                } 
            }        
        },
        {
            type: 'input',
            name: 'school',
            message: `What school does your team intern attend?`,
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log(`Please provide the name of your intern's school!`);
                  return false;
                } 
            }        
        },
    ])
    .then(data => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        employeesArr.push(intern);
        addEmployee();
    });
}

// writes the HTML file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            ok: true,
            message: 'HTML File Generated!'
          });
        });
      });
};

// initializes the app
addManager()
