const sum = require('./operations/sum');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');
const squareRoot = require('./operations/squareRoot');
const square = require('./operations/square');

class calculator{
    sum(a,b){
        return sum(a,b);
    }
    subtract(a,b){
        return subtract(a,b);
    }
    multiply(a,b){
        return multiply(a,b);
    }
    divide(a,b){
        return divide(a,b);
    }
    squareRoot(a){
        return squareRoot(a);
    }
    power(a){
        return square(a);
    }
}

module.exports = calculator;