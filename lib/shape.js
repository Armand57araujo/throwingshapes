





class Shape {

    constructor(text, textColor, backgroundColor) {

        this.text = text
        this.textColor = textColor
        this.backgroundColor = backgroundColor

    }

}

class Circle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor)

    }
    getSVG() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${this.backgroundColor}"/>`;

    }

}


class Square extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor)

    }
    getSVG() {
        return `<rect xmlns="http://www.w3.org/2000/svg" x="50" y="50" width="100" height="100" fill="${this.backgroundColor}"/>`;

    }

}


class Triangle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor)
    }
    getSVG() {
        return `<polygon xmlns="http://www.w3.org/2000/svg" points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.backgroundColor}"/>`;

    }

}
        // return '<polygon xmlns="http://www.w3.org/2000/svg" points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.backgroundColor}"/>';


        module.exports = {Circle, Square, Triangle};

