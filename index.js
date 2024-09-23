const inquirer = require('inquirer');
const db = require('./db/server');

// DB connection- Start server after

db.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Database is connected.');
        employee_tracker();
    }
});



/*db.connect(err => {
    if (err) throw err;
    console.log('Database is connected.');
    employee_tracker();
});*/

let employee_tracker = function() {
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
                    'Exit'
                ]
            }
        ])
        .then((answers) => {
            if (answers.action === 'View all departments') {
                db.query(`SELECT * FROM department`, (err, result) => {
                    if (err) throw err;
                    console.log("All departments: ");
                    console.table(result.rows);
                    employee_tracker();
                });
            } else if (answers.action === 'View all roles') {
                db.query(`SELECT * FROM roles`, (err, result) => {
                    if (err) throw err;
                    console.log("All roles: ");
                    console.table(result.rows);
                    employee_tracker();
                });
            } else if (answers.action === 'View all employees') {
                db.query(`SELECT * FROM employees`, (err, result) => {
                    if (err) throw err;
                    console.log("All employees: ");
                    console.table(result.rows);
                    employee_tracker();
                });
            } else if (answers.action === 'Add a department') {
                inquirer.prompt ([{
                    type: 'input',
                    name: 'department',
                    message: 'What is the department name?'
                }]).then((answers) => {
                db.query(`INSERT INTO department (names) VALUES ($1)`, [answers.department], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.department} to the department database.`)
                    employee_tracker();
                });
            })
        } else if (answers.action === 'Add a role') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;

                inquirer.prompt ([
                    {
                       //name
                       type: 'input',
                       name: 'title',
                       message: 'What is the name of the role?'
                    },
                    {
                       //salary
                       type: 'input',
                       name: 'salary',
                       message: 'What is the salary of the role?'
                    },
                    {
                        //department for the role
                        type: 'list',
                        name: 'department',
                        message: 'Pick the department the role fits into:',
                        choices: () => {
                            let array = [];
                            for (let i = 0; i < result.rows.length; i++) {
                                array.push({
                                    name: result.rows[i].names,
                                    value: result.rows[i].id
                                });
                            }
                            return array;
                        }
                    }
                ]).then ((answers) => {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].name === answers.department) {
                            let department = result[i];
                        }
                    }
                    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`, [answers.title, answers.salary, answers.department], (err, result) => {
                        if (err) throw err;
                        console.log(`Added ${answers.role} to the database.`)
                        employee_tracker();
                    });
                })
            })
        } else if (answers.action === 'Add an employee') {
            db.query(`SELECT * FROM employees, roles`, (err, result) => {
                if (err) throw err;

                inquirer.prompt([
                    {
                        //first name
                        type: 'input',
                        name: 'firstName',
                        message: 'What is the employees first name?'
                     },
                     {
                       //last name
                       type: 'input',
                       name: 'lastName',
                       message: 'What is the employees last name?'
                     },
                     {
                        //role
                        type: 'list',
                        name: 'role',
                        message: 'What is the employees role?',
                        choices: () => {
                            let array = [];
                            for (let i = 0; i < result.length; i++) {
                                array.push(result[i].title);
                            }
                            let newArray = [...new Set(array)];
                            return newArray;
                        }
                     },
                     {
                        //manager
                        type: 'input',
                        name: 'manager',
                        message: 'Who is the employees manager?'
                     }
                ])
            }).then ((answers) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title === answers.roles) {
                        let roles = result[i];
                    }
                }
                db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [answers.firstName, answers.lastName, role.id, answers.manager.id], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.firstName} ${answers.lastName} to the database.`)
                    employee_tracker();
                });
            })
        } else if (answers.action === 'Update an employees role') {
            db.query(`SELECT * FROM employees, roles`, (err, result) => {
                if (err) throw err;
                inquirer.prompt ([
                    {
                        type: 'list',
                        name: 'employee',
                        message: 'Which employee role would you like to update?',
                        choices: () => {
                            let array = [];
                            for (let i = 0; i < result.length; i++) {
                                array.push(result[i].last_name);
                            }
                            let employeeArray = [...new Set(array)];
                            return employeeArray;
                        }
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: 'What is the employees new role?',
                        choices: () => {
                            let array = [];
                            for (let i = 0; i < result.length; i++) {
                                array.push(result[i].title);
                            }
                            let newArray = [...new Set(array)];
                            return newArray;
                        }
                    }
                ]).then((answers) => {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].last_name === answers.employee) {
                            let name = result[i];
                        }
                    }
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].title === answers.role) {
                            let role = result[i];
                        }
                    }
                    db.query(`UPDATE employees SET $1 WHERE $2`, [{role_id: role}, {last_name: name}], (err, result) => {
                        if (err) throw err;
                        console.log(`Updated ${answers.employee} role to the database.`)
                        employee_tracker();
                    });
                })
            })
        } else if (answers.action === 'exit') {
            db.end();
            console.log("Exit");
        }
    })
};






//practice starter option:
           /* switch (answers.action) {
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
                    addDepartment() {
                        
                    };
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

mainOptions(); */