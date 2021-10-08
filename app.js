const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");

const teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function createManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
    ])
    .then (answer => {
        const manager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber);
        teamMembers.push(manager);
        console.log("Adding member to Team...");
    })
};

// .then(answers => {
    // const manager = new Manager (answers.managerName,  ...)
    // teamMembers.push(manager)
    // createTeam();
// }

function createEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        },
    ])
    .then (answer => {
        const engineer = new Engineer (answer.name, answer.id, answer.email, answer.github);
        teamMembers.push(engineer);
        console.log("Adding member to Team...");
    })
};

function createIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },
    ])
    .then (answer => {
        const intern = new Intern (answer.name, answer.id, answer.email, answer.school);
        teamMembers.push(intern);
        console.log("Adding member to Team...");
    })
};

function createEmployee() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },
        {
            type: "list",
            name: "role",
            message: "Choose another role...",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID?"
        },
    ])
};
// type list of options to call for team members

// build team () =>
function buildTeam() {
    // create the output directory if the output path is not existing
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdir(OUTPUT_DIR);
    }
    console.log("Generating html...");
    fs.writeFileSync(OUTPUT_DIR), render(teamMembers, "utf-8")
    console.log("Successfully generated team.html");
};

createManager()
  .then(createEmployee)
  .then(createEngineer)
  .then(createEmployee)
  .then(createIntern)
  .then(buildTeam)
  .catch(err => {
      console.log(err);
  });
