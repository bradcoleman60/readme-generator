//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
var inquirer = require("inquirer");

/*Declare an object that will contain all of the user 
inputs from the inquirer method*/
var projectInputs = {
  title: "",
  author: "",
  description: "",
  technology: "",
};

//This is the object of the questions that will be answered in the terminal
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "author",
      message: "What is the name of the author of this project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project",
    },
    {
      type: "checkbox",
      name: "technology",
      message: "Please select the technologies you used on this project",
      choices: ["JavaScript", "HTML", "CSS", "NODE.js", "Jquery"],
    },
  ])
  //This logs the answers
  .then((answers) => {
    projectInputs.title = answers.title;
    projectInputs.author = answers.author;
    projectInputs.description = answers.description;
    projectInputs.technology = answers.technology;
    console.info("answer:", answers.title);
    console.info("answer:", answers.author);
    console.info("answer:", answers.description);
    console.info("answer:", answers.technology);
    textContent(
      projectInputs.title,
      projectInputs.author,
      projectInputs.description,
      projectInputs.technology
    );
  });

function textContent(a, b, c, d) {
var theReadMe = 
`The title of this project is ${a} and the author is ${b}. 

The description of this project is: ${c}.
    
The technology used in this project included: ${d}

| Technology Used | Resource URL | 
| ------------- |:-------------| 
| Git | [https://git-scm.com/](https://git-scm.com/) |   
| HTML | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |   
| JavaScript | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| UI Kit | [https://getuikit.com/docs/introduction](https://getuikit.com/docs/introduction) |
| jQuery API | [https://api.jquery.com/](https://api.jquery.com/) |
| Web APIs | [https://developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API) |`;

    fs.writeFile('TEST_README.md',theReadMe, (err) =>{
        if (err) throw err;
        console.log('The file is saved')
    })
    console.log(theReadMe)
}
