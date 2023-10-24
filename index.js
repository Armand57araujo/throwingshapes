const { Circle, Square, Triangle} = require('./lib/shape')

const inquirer = require('inquirer');

const fs = require('fs');
// const svgTemplate = require('./lib/shape'); // You'll need to create this file with the SVG template

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



const questions = [

{
type: 'input',
name: 'text',
message: 'Please enter text, that can only be 3 Characters long',
validate: function(input) {
    if(input.length > 3) {

        return false;
    }
    else {return true}
}
},

{
type: 'input',
name: 'textColor',
message: 'Please enter desired text color (Enter color name or hexadecimal value)'
},
{
type: 'input',
name: 'backgroundColor',
message: 'Please enter desired background color (Enter color name or hexadecimal value)',
},
{
type: 'list',
name: 'shapes',
message: 'Please select desired shape',
choices: ['circle', 'triangle', 'square',]
},

];




function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function generateLogo() {
  const text = await getUserInput('Enter up to 3 characters for the text: ');

  const textColor = await getUserInput('Enter the text color (keyword or hexadecimal): ');

  const shapes = ['circle', 'triangle', 'square'];
  const shapeOptions = shapes.map((shape, index) => `${index + 1}. ${shape}`).join('\n');
  const shapeIndex = await getUserInput(`Choose a shape (enter the corresponding number):\n${shapeOptions}\n`);
  const shape = shapes[parseInt(shapeIndex) - 1];

  const shapeColor = await getUserInput('Enter the shape color (keyword or hexadecimal): ');

  const svgContent = svgTemplate.generateSVG(text, textColor, shape, shapeColor);

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
    rl.close();
  });
}

// generateLogo();


























function init () {
    inquirer
.prompt(questions)
.then(answers => { console.log(answers)
let requestedShape;
    //call 
    switch(answers.shapes) {

        case "square" :
            requestedShape = new Square (answers.text, answers.textColor, answers.backgroundColor);
            break;
        case "circle" :
            requestedShape = new Circle (answers.text, answers.textColor, answers.backgroundColor);
            break;
        default :
            requestedShape = new Triangle (answers.text, answers.textColor, answers.backgroundColor);
            break;

    }
let newSVG = requestedShape.getSVG();
fs.writeFile('logo.svg', newSVG, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
    // rl.close();
  });

})
.catch(error => {
console.log(error);


})
}

init ();