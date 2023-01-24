//This makes the file system module of node available in this script
const fs = require("fs");

const fetch = require('node-fetch');



//This adds the inquire.js module to this script
var inquirer = require("inquirer");
//This adds the inquire prompt type of "loop"
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//This adds link to components.js file 
var cp = require("./components")

// var requestUrl = 'https://api.github.com/users/'

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//This is the object of the questions that will be answered in the terminal

inquirer
  .prompt([
       
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate(answer) {if (answer.length <1) {
        return `Please enter a valid title`;
      } return true }
      
    },
    {
      type: "input",
      name: "author",
      message: "Please enter your full name",
      validate(answer) {if (answer.length <1) {
        return `Please enter a valid author`;
      } return true }
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address?",
      validate(answer) {if (answer =='' || answer.indexOf('@') == -1 || answer.indexOf('.') == -1){
        return 'Please enter a valid email address'}
        return true
      }
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Git Hub user name",
    } ,
     
    {
      type: "input",
      name: "description",
      message: "Please describe your project",
      
    },

    



    



    


    {
      type: "input",
      name: "usage",
      message: "Please describe the usage of your project"
      
    },

    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines"
      
    },

    {
      type: "list",
      name: "license",
      message: "Please select a license you would like to use",
      choices: ["MIT", "ISC", "Unlicense"],
    },
    
    { 
      type: 'input',
      name: 'testSteps',
      message: 'Enter tests steps to ensure this project is working',
    },

    {
      type:'confirm',
      name: "installationStepsNeeded",
      message: "Would you like to add installation steps to your Readme?",
    },
    {
      type: 'input',
      name: 'installationSteps',
      message: 'Enter the installation step here:',
      when: (answers) => answers.installationStepsNeeded === true

    },

    {
      type:'loop',
      name: 'installationSteps2',
      message: "Would you like to add another installation step?",
      when: (answers) => answers.installationStepsNeeded === true,
      questions: [
        {
          type: 'input',
          name: 'installationSteps2',
          message: 'Enter the installation step here:'
        }
      ]
    }
    

  ])
  //This logs the answers
  .then((answers) => {
    console.log(answers);
    //Using object destructuring made variables equal to the keys in the answer object
    const { title, author,email, github, description, license, installationSteps,installationSteps2,usage,contribution,testSteps } = answers;
    
    //Deconstruct the installation steps
    // var outputData1 = installationSteps.map(Object.values)
    var outputData2 = installationSteps2.map(Object.values)

    // var NewArray = outputData1.concat(outputData2)
    var installString = ''
    createInstallationString(outputData2)
    function createInstallationString (outputData2){
      
      for (i = 0; i < outputData2.length; i++){
      
        installString = installString + outputData2[i] + '\n'
      } console.log(installString)
      // sendInstallString(installString)
    }

    

    //Pass variables to the settestContent function 
    settextContent(title, author, email, github, description, license,  installationSteps,installationSteps2,usage,contribution,testSteps, installString  );
    
  });


/* This sets the content (via a template literal string) of the 
readme document*/
function settextContent(title, author, email, github, description, license, installationSteps,installationSteps2,usage,contribution,testSteps, installString) {
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

${installationSteps}
${installString}

## **Usage** 

${usage}

## **License**

${cp.license[license]}

## **Contributing**

${contribution}

## **Tests**

${testSteps}
  
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

