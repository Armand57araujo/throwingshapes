
class Shape {
    constructor(text, textColor, backgroundColor) {
        this.text = text
        this.textColor = textColor
        this.backgroundColor = backgroundColor

    }
    setColor(shapeColor) {
        this.backgroundColor = shapeColor
    }
    // getText() {
    //     return this.text;
    // }
    // getTextColor() {
    //     return this.textColor;
    // }
    // getBackgroundColor() {
    //     return this.backgroundColor;
    // }

    // getShape() {
    //     return this.shape;
    // }

    // bring in the render method from the children since it's common to all three
    // use some logic to determine what html element to return based on the shape selected
    // render() {
    //     // use a switch statement
    //     switch (this.shape) {
    //         case "circle":
    //             return `
    //             <svg xmlns="http://www.w3.org/2000/svg" >
    //                 <circle cx="235" cy="75" r="75" fill="${this.backgroundColor}" />
    //                 <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="48" fill="${this.textColor}">${this.text}</text>
    //             </svg>
    //             `
    //             break;
    //         // do the same thing for the other shapes -- triangle and rectangle
    //         // case "triangle"....

    //         default:
    //             break;
    //     }
    // }

}

class Circle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor)
    }
     render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width = "300" height = "200">
        <circle cx="150" cy="125" r="75" fill="${this.backgroundColor}" />
        <text x="49%" y="60%" alignment-baseline="middle" text-anchor="middle" font-size="48" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }

}


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


class Triangle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width = "300" height = "200">
        <polygon points= "150,10 10,210 300,210"  r="75" fill="${this.backgroundColor}" />
        <text x="50%" y="60%" alignment-baseline="middle" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
    </svg>
    `

    }

}
// return '<polygon xmlns="http://www.w3.org/2000/svg" points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.backgroundColor}"/>';



module.exports = { Shape, Circle, Square, Triangle };

