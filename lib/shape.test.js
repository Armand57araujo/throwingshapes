const { Circle, Square, Triangle} = require('./shape')


describe('Shape Class Tests', () => {
      it('test to see if SVG circle generates properly', () => {
        // Arrange
        const shape = '<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="white"/>';
        // Act
        const newShape = new Circle ('abc', 'red', 'white' );
        const newCircle = newShape.getSVG();
        expect(newCircle).toEqual(shape);
      });
    });


describe('Shape Class Tests', () => {
      it('', () => {
        // Arrange
        const shape = `<rect xmlns="http://www.w3.org/2000/svg" x="50" y="50" width="100" height="100" fill="black"/>`;
        // Act
        const newShape = new Square ('abc', 'red', 'black' );
        const newSquare = newShape.getSVG();
        expect(newSquare).toEqual(shape);
      });
    });

describe('Shape Class Tests', () => {
      it('', () => {
        // Arrange
        const shape = `<polygon xmlns="http://www.w3.org/2000/svg" points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="purple"/>`;
        // Act
        const newShape = new Triangle ('abc', 'red', 'purple' );
        const newTriangle = newShape.getSVG();
        expect(newTriangle).toEqual(shape);
      });
    });






  

  