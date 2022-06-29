const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');



const promptManager = () => {

    return inquirer.prompt([

      {
        type: 'input',
        name: 'manager',
        message: 'Who is your manager? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Take me to your manager!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'managerID',
        message: 'What is your managers ID',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter your Managers ID! Now!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your managers Email?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('just put letters in it doesnt matter. nothing matters.');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your managers office number?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("mad you're in a cubicle huh? i dont blame ya. whats the office number asshole?");
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'more',
        message: 'Manager profile completed! Would you like to enter another employee?',
        default: false
      },
    ])
  };

  const promptStaff = staffData => {
    console.log(`
  ========================
  Add Another Staff Member
  ========================
  `);

  if (!staffData.projects) {
  staffData.projects = [];
  }
    return inquirer.prompt([
      {
        type: 'checkbox',
        name: 'employee',
        message: 'Select an option:',
        choices: ['Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is your employee ID',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Enter your ID! Now!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('nah');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('out with it!!');
              return false;
            }
          }
      },
    ])
    .then(projectData => {
        staffData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptStaff(staffData);
          } else {
            return staffData;
          }
      });
};

promptManager()
  .then(promptStaff)
  .then(staffData => {
    return generatePage(staffData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });



  // {
  //   type: 'confirm',
  //   name: 'more',
  //   message: 'Would you like to enter another project?',
  //   default: false
  // },
