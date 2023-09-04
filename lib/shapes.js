class shape {
    constructor(color) {
        this.color=color;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150,18 244,182 56,182" style="fill:${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150,18 244,182 56,182" style="fill:${this.color}"/>`;
    }
}