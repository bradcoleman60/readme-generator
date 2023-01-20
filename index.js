
//This makes the file system module of node available in this script
const fs = require('fs');

//This adds the inquire.js module to this script
var inquirer = require("inquirer");

//This is the object of the questions that will be answered in the terminal
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is the name of the author of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
      },
      {
        type: 'checkbox',
        name: 'technology',
        message: 'Please select the technologies you used on this project',
        choices: ['JavaScript', 'HTML', 'CSS','NODE.js', 'Jquery']
      }
      
    
  ])
  //This logs the answers
  .then((answers) => {
    console.info('answer:',answers.title);
    console.info('answer:',answers.author);
    console.info('answer:',answers.description);
    console.info('answer:',answers.technology);
    // Use user feedback for... whatever!!
  });

