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
  description: "",
  technology: "",
  cssLibrary: "",
  codeHighlight: ""
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
    {
      type: "confirm",
      name: "cssUsed",
      message: "Did you use a CSS library on this project?",
      when: (answers) => answers.technology.includes('CSS')
    },
    {
      type: "checkbox",
      name: "cssLibrary",
      message: "Select a css that you used",
      choices: ["BootStrap", "Tailwind", "Bulma", "Skeleton", "Pure",'Groundwork', 'Cardinal','Other'],
      when: (answers) => answers.cssUsed === true
    },
    {
      type: "confirm",
      name: "codeHighlightAnswer",
      message: "Would you like to include a code highlight in your readMe?"
    },
    {
      type: "input",
      name: "codeHightlightText",
      message: "User your editor to enter your code highlight",
      when: (answers) => answers.codeHighlightAnswer === true
    }
  ])
  //This logs the answers
  .then((answers) => {
    projectInputs.title = (answers.title);
    projectInputs.author = answers.author;
    projectInputs.description = answers.description;
    projectInputs.technology = answers.technology;
    const technologyArray = answers.technology;
    const cssArray = answers.cssLibrary;
    projectInputs.codeHighlight = (answers.codeHightlightText);
    // console.info("answer:", answers.title);
    // console.info("answer:", answers.author);
    // console.info("answer:", answers.description);
    // console.info("answer:", answers.technology);
    settextContent(
      projectInputs.title,
      projectInputs.author,
      projectInputs.description,
      projectInputs.technology,
      projectInputs.codeHighlight
      
    );
    
    // console.log(projectInputs.codeHighlight)
    for (const technology of technologyArray){
      // console.log("this is the technology: " + technology)
    };
    for (const library of cssArray){
      // console.log("CSS Library uses: " + library)
    };
    // techIterator(projectInputs.technology)
  });

  
/* This sets the content (via a template literal string) of the 
readme document*/
function settextContent(a, b, c, d, e) {
  var theReadMe = `## **${a}** 
  
  
  ## **The Author**

   ${b}. 

  ## **Description**

  ${c}.
    
  ## **Technology Used**

  The technology used in this project included: 
  ${d}'

## **Code HightLight**

\`\`\`
${e}
\`\`\`

## **License**
 
${cp.badges[0]}
${cp.license[0]}

`;

  writeReadme(theReadMe);
}

/*This function writes the readme document*/
function writeReadme(theReadMe) {
  fs.writeFile("TEST_README.md", theReadMe, (err) => {
    if (err) throw err;
    console.log("The file is saved");
  });
  console.log(theReadMe);
  techList();
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

