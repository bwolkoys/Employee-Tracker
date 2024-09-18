const inquirer = require('inquirer');
const db = require('./db/server');

// DB connection- Start server after
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    employee_tracker();
});

function mainOptions() {
    console.log("Welcome to the Employee Tracker");
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'action',
                message: 'Please choose an option:', 
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                ]
            }
        ])
        .then((answers) => {
            switch (answers.action) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log("Exiting application.");
                    process.exit();
            }
        });
};

mainOptions();