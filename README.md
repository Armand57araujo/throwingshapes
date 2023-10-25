# throwingshapes

## Technology Used 

| Technology Used | Resource URL | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/) | 
| Node | [https://developer.mozilla.org/en-US/docs/Glossary/Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js) | 

## Description 
In this project I created a SVG Logo generator command line application using node.js, that generates three shapes -circle, square, triangle - and offers a varity of colors to select from. 

[Walkthrough Video](https://watch.screencastify.com/v/kGI1kGkYpazleTL4O8y9)


## Code Example 


 
class Square extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor)

    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width = "300" height = "200" >
        <rect x="50" y="20" width="150" height="150" fill="${this.backgroundColor}" /> 
        <text x="43%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="48" fill="${this.textColor}">${this.text}</text>
    </svg>
    `
    }

}


Though it was still a process, this challenge was more manageable than those in times past. The most difficult part was creating the tests and testing and re-testing the logo images to make sure they correctly displayed the inputs.




    const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter text, that can only be 3 Characters long',
    validate: function (input) {
      if (input.length > 3) {

        return false;
      }
      else { return true }
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




Because of the work we did with the README.md generator challenege, I had been pretty well-exposed to the concept of creating an array of questions, and answers that I had to make use of again in this project. I did find myself with difficulty producing the actual image, but realized with the help of a tutor that I have to inlude all the html elements that I wish to display in order for the image to render.



## Learning Points 


I This project further added to growing understanding of node.js, and all that it offers, from being able to run apps in my command-line to the verbage and syntax needed to facilitate the functionality of said apps. All-in-all, I find this particular aspect of the class to be very interesting.


## Author Info
Armand Araujo
Age: 28
Location: Santa Barbara, CA

 
* [LinkedIn](https://www.linkedin.com/in/armand-araujo-a82ba2291/) 
* [Github](https://github.com/Armand57araujo) 


## Credits 
