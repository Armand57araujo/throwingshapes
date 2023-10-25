const { Circle, Square, Triangle} = require('./shape')


describe('Shape Class Tests', () => {
      it('test to see if SVG circle generates properly', () => {
        const shape = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width = "300" height = "200">
        <circle cx="150" cy="125" r="75" fill="white" />
        <text x="49%" y="60%" alignment-baseline="middle" text-anchor="middle" font-size="48" fill="black">abc</text>
        </svg>
        `;
        const newShape = new Circle ('abc', 'black', 'white' );
        const newCircle = newShape.render();
        expect(newCircle).toEqual(shape);
      });
    });


describe('Shape Class Tests', () => {
      it('test to see if SVG square generates properly', () => {
        const shape = 

        `<svg xmlns="http://www.w3.org/2000/svg" width = "300" height = "200" >
        <rect x="50" y="20" width="150" height="150" fill="black" /> 
        <text x="43%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="48" fill="red">abc</text>
    </svg>
    `;


        const newShape = new Square ('abc', 'red', 'black' );
        const newSquare = newShape.render();
        expect(newSquare).toEqual(shape);
      });
    });

describe('Shape Class Tests', () => {
      it('test to see if SVG triangle generates properly', () => {
        const shape = 
        `<svg xmlns="http://www.w3.org/2000/svg" width = "300" height = "200">
        <polygon points= "150,10 10,210 300,210"  r="75" fill="purple" />
        <text x="50%" y="60%" alignment-baseline="middle" text-anchor="middle" font-size="60" fill="red">abc</text>
    </svg>
    `;


        const newShape = new Triangle ('abc', 'red', 'purple' );
        const newTriangle = newShape.render();
        expect(newTriangle).toEqual(shape);
      });
    });






  

  