//This makes the file system module of node available in this script
const fs = require("fs");

//This adds the inquire.js module to this script
var inquirer = require("inquirer");

//This adds link to components.js file 
var cp = require("./components")

/*Declare an object that will contain all of the user 
inputs from the inquirer method*/
var projectInputs = {
  title: "",
  author: "",
  email: "",
  gitHubUser: "",
  description: "",
  License: "",
  cssLibrary: "",
  codeHighlight: ""
};

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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
      message: "Please enter your name",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address?",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Git Hub user name",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license you would like to use",
      choices: ["MIT", "ISC", "Unlicense"],
    }
    // {
    //   type: "confirm",
    //   name: "codeHighlightAnswer",
    //   message: "Would you like to include a code highlight in your readMe?"
    // },
    // {
    //   type: "input",
    //   name: "codeHightlightText",
    //   message: "User your editor to enter your code highlight",
    //   when: (answers) => answers.codeHighlightAnswer === true
    // }
  ])
  //This logs the answers
  .then((answers) => {
    //Using object destructuring made variables equal to the keys in the answer object
    const { title, author,email, github, description, license} = answers;
    settextContent(title, author, email, github, description, license);
      
  });


/* This sets the content (via a template literal string) of the 
readme document*/
function settextContent(title, author, email, github, description, license) {
  var theReadMe = `## **${title}**        ${cp.badges[license]}
    
 ## **Table of Contents**
  
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## **Description**

  ${description}.

## **Installation**

## **Usage** 

## **License**

${cp.license[license]}


## **Contributing**

${cp.contributionGuidelines}

## **Tests**
  
## **Questions**

Please contact ${author} at ${email}.

Please also check the GitHub Repositories at: https://github.com/${github}/


  `;

  writeReadme(theReadMe);
}

/*This function writes the readme document*/
function writeReadme(theReadMe) {
  fs.writeFile("TEST_README.md", theReadMe, (err) => {
    if (err) throw err;
    console.log("The file is saved");
  });
  // console.log(theReadMe);
  
}

//This function adds ability to obtain which technologies were selected
function techIterator (projTech){

projTech.forEach((el) => techList(el)) 
// projTech.forEach((el) => console.log(el)) 
}


/*This function gets the link to the technology used in the project */
function techList(selectedTech) {
  const techLookUp = new Map();
  techLookUp.set("git", "[https://git-scm.com/](https://git-scm.com/)");
  techLookUp.set(
    "HTML",
    "[https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)"
  );
    // return(techLookUp.get(selectedTech));
  console.log(techLookUp.get(selectedTech));
}

