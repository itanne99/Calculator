const Calculation = require('./models/calculation');
const sum = require('./operations/sum');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');
const root = require('./operations/root');
const power = require('./operations/power');

class calculator{
    static calculations = [];
    static sum(a,b) {
        let calculation = new Calculation(a,b,sum);
        calculator.calculations.push(calculation);
        return calculation.getResults();
    }

    static subtract(a,b) {
        let calculation = new Calculation(a,b,subtract);
        calculator.calculations.push(calculation);
        return calculation.getResults();
    }

    static multiply(a,b) {
        let calculation = new Calculation(a,b,multiply);
        calculator.calculations.push(calculation);
        return calculation.getResults();
    }

    static divide(a,b) {
        let calculation = new Calculation(a,b,divide);
        calculator.calculations.push(calculation);
        return calculation.getResults();
    }

    static power(a,b) {
        let calculation = new Calculation(a,b,power);
        calculator.calculations.push(calculation);
        return calculation.getResults();
    }

    static root(a,b){
        let calculation = new Calculation(a,b,root);
        calculator.calculations.push(calculation);
        return calculation.getResults();
    }
}

module.exports = calculator;