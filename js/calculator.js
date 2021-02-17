const calculation = require('./models/calculation');
const sum = require('./operations/sum');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');
const squareRoot = require('./operations/squareRoot');
const square = require('./operations/square');

class calculator{
    static caclulations = [];
    static sum(a,b) {
        let calculation = new Calculation(a,b,sum);
        calculator.caclulations.push(calculation);
        return calculation.getResults();
    }

    static subtract(a,b) {
        let calculation = new Calculation(a,b,subtract);
        calculator.caclulations.push(calculation);
        return calculation.getResults();
    }

    static multiply(a,b) {
        let calculation = new Calculation(a,b,multiply);
        calculator.caclulations.push(calculation);
        return calculation.getResults();
    }

    static divide(a,b) {
        let calculation = new Calculation(a,b,divide);
        calculator.caclulations.push(calculation);
        return calculation.getResults();
    }

    static square(a) {
        let calculation = new Calculation(a,square);
        calculator.caclulations.push(calculation);
        return calculation.getResults();
    }

    static squareRoot(a){
        let calculation = new Calculation(a,squareRoot);
        calculator.caclulations.push(calculation);
        return calculation.getResults();
    }
}

module.exports = calculator;