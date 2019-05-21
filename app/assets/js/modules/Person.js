class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favColor = favColor;
    }

    greet() {
        console.log("Hi, my name is " + this.name + " and my favourite color is " + this.favColor);
    }
}

export default Person; 