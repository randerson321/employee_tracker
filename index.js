// requiring the database
const { prompt } = require("inquirer");
const db = require("./db");

// The main menu function starts the function
function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "what would you like to do?",
            choices: [
                {
                    name: "view All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Quit",
                    value: "Quit"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choice;
        console.log(res)
        switch (choices) {
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'ADD_DEPARTMENT':
                addDept();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'UPDATE_EMPLOYEE_ROLE':
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    })
}
// view employees, roles and departments
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("/n");
            console.table(employees)
        })
        .then(() => mainMenu());
}

function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("/n");
            console.table(roles)
        })
        .then(() => mainMenu());
}

function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("/n");
            console.table(departments)
        })
        .then(() => mainMenu());
}


// add employees departments roles

function addEmployee() {
    prompt([
        {
            type: "input",
            message: "Enter the employee's first name",
            name: "firstName"
        },
        {
            type: "input",
            message: "Enter the employee's last name",
            name: "lastName"
        },
        {
            type: "input",
            message: "Enter the employee's role ID",
            name: "addEmployRole"
        },
        {
            type: "input",
            message: "Enter the employee's manager ID",
            name: "addEmployMan"
        }
    ])
        .then(answer => {
            let employee = {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.addEmployRole,
                manager_id: answer.addEmployMan,

            }
            db.addEmployee(employee)
                .then(() => console.log('successfullyadded'))
                .then(() => mainMenu());

        });
}
function addDept() {
    prompt({
        type: "input",
        message: "Enter the name of the new department",
        name: "newDept"
    })
        .then((answer) => {

            db.addDepartment(answer.newDept)
                .then(([rows]) => {
                    let departments = rows;
                    console.log("/n");
                    console.table(departments)
                })
                .then(() => mainMenu());

        });
}
function addRole() {
    prompt([
        {
            type: "input",
            message: "Enter the employee's title",
            name: "title"
        },
        {
            type: "input",
            message: "Enter the employee's salary",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter the employee's department ID",
            name: "department_id "
        }
    ])
        .then(answer => {
            let role = {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.department_id,
            }
            db.addRole(role)
                .then(() => console.log('successfullyadded'))
                .then(() => mainMenu());

        });
}
function updateEmployeeRole() {
    prompt([
        {
            type: "input",
            message: "Enter the employee's ID you want to be updated",
            name: "updateEmploy"
        },
        {
            type: "input",
            message: "Enter the new role ID for that employee",
            name: "newRole"
        }
    ])
        .then(() => mainMenu());
}
function quit() {
    console.log("goodbye!");
    process.exit();
};


mainMenu();