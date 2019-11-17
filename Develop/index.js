const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Employee = require("./Employee");
const employeeList = require("./employeeList");
const fs = require("fs");


function buildProfile() {

    // Determine what the new employee's role is
    start();       

}

function start() {

    console.log("Welcome to the Employee Summary Generator. You will begin by inputting your manager's information.");
    newManager();
        
}

function roleQuestion() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeRole",
                message: "What is the new employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(function (data) {
            if (data.employeeRole === "Manager") {
                newManager();
            }else if (data.employeeRole === "Engineer") {
                newEngineer();
            }else{
                newIntern();
            }
        });
        
}

function newManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the new manager's name."
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the new manager's ID number."
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the new manager's ID email address."
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter the new manager's office number."
            }
        ])
        .then(function(data) {
            let manager = new Manager(data.employeeName, data.employeeID, data.employeeEmail, data.managerOfficeNumber);

            employeeList.push(manager);
            addAnother();
        });
}

function newEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the new engineer's name."
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the new engineer's ID number."
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the new engineer's ID email address."
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Please enter the new engineer's GitHub username."
            }
        ])
        .then(function(data) {
            let engineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.engineerGitHub);

            employeeList.push(engineer);
            addAnother();
        });
}

function newIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the new intern's name."
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the new intern's ID number."
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the new intern's ID email address."
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the new intern's school."
            }
        ])
        .then(function(data) {
            let intern = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.internSchool);

            employeeList.push(intern);
            addAnother();
        });
}

function addAnother() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add another employee?",
            choices: ['Yes', 'No']
        }
    ])
    .then(function(data) {
        if(data.addAnother === "Yes") {
            roleQuestion();
        }else{
            createFile("index.html", generateHTML.generateHTML());
            populateData();
        }
    });
} 

function createFile(html, data) {
    fs.writeFile(html, data, function(err) {
        if (err) {
            return Error;
        }
    });
}

function addToFile (html, data) {
    fs.appendFile(html, data, function(err) {
        if (err) {
            return Error
        }
    });
}

function populateData() {
    
    employeeList.forEach(function (data) {
        addToFile("index.html", generateHTML.addManagerCard(data));
    });

    closeFile();

};

function closeFile(){
    addToFile("index.html", generateHTML.closeHTML());
}


buildProfile();

 