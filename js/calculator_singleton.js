const Calculation = require('./models/calculation');
const sum = require('./operations/sum');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');
const root = require('./operations/root');
const power = require('./operations/power');

class Calculator_singleton{
    constructor() {
        this.calculations = [];
    }
    sum(a,b) {
        let calculation = new Calculation(a,b,sum);
        this.calculations.push(calculation);
        return calculation.getResults();
    }

    subtract(a,b) {
        let calculation = new Calculation(a,b,subtract);
        this.calculations.push(calculation);
        return calculation.getResults();
    }

    multiply(a,b) {
        let calculation = new Calculation(a,b,multiply);
        this.calculations.push(calculation);
        return calculation.getResults();
    }

    divide(a,b) {
        let calculation = new Calculation(a,b,divide);
        this.calculations.push(calculation);
        return calculation.getResults();
    }

    power(a,b) {
        let calculation = new Calculation(a,b,power);
        this.calculations.push(calculation);
        return calculation.getResults();
    }

    root(a,b){
        let calculation = new Calculation(a,b,root);
        this.calculations.push(calculation);
        return calculation.getResults();
    }
}

module.exports = Calculator_singleton;