# IS219-Calculator
[![Coverage Status](https://coveralls.io/repos/github/itanne99/calculator/badge.svg?branch=master)](https://coveralls.io/github/itanne99/calculator?branch=master) [![Build Status](https://www.travis-ci.com/itanne99/IS219-calculator.svg?branch=master)](https://www.travis-ci.com/itanne99/IS219-calculator)
# Design Pattern
## Creational
### Singleton
By using singleton we can have the variables of a class kept stored on the file that the class is called upon. <br>
For example, if we call the calculator in one file and run 10 different calculations and call the class again on a different file we won't see those previously made calculations. <br>
###### calculator.js
```js
//Imports

class Calculator_singleton {
  constructor() {
    if (Calculator_singleton.instance == null) {
      this.calculations = [];
      Calculator_singleton.instance = this
    }
    return Calculator_singleton.instance
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
}

const calculator = new Calculator_singleton()
Object.freeze(calculator)
module.exports = calculator
```
###### firstUseCalculator.js
```js
const calculator = require('calculator.js')

calculator.sum(1,2)
calculator.sum(3,4)
calculator.subtract(5,6)
calculator.multiply(6,6)
```
###### console output
```js
[
    Calculation { a: 1, b: 2, op: [Function: sum] },
    Calculation { a: 3, b: 4, op: [Function: sum] },
    Calculation { a: 5, b: 6, op: [Function: subtract] },
    Calculation { a: 6, b: 6, op: [Function: multiply] }
]
```
###### secondUseCalculator.js
```js
const calculator = require('calculator.js')

calculator.root(4,2)
calculator.power(6,2)
calculator.divide(12,2)
calculator.multiply(6,6)
```
###### console output
```js
[
    Calculation { a: 1, b: 2, op: [Function: sum] },
    Calculation { a: 3, b: 4, op: [Function: sum] },
    Calculation { a: 5, b: 6, op: [Function: subtract] },
    Calculation { a: 6, b: 6, op: [Function: multiply] },
    Calculation { a: 4, b: 2, op: [Function: root] },
    Calculation { a: 6, b: 2, op: [Function: power] },
    Calculation { a: 12, b: 2, op: [Function: divide] },
    Calculation { a: 6, b: 6, op: [Function: multiply] }
]
```
## Structural
### Adapter
An **adapter** wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.
```js
//imports

function readCSV(file){
    if(fileType(file) != "CSV"){
        fileContent = convertToCSV(file, fileType(file))
        file = fileContent
    }
    //readCSV function code
}

function fileType(file){
  return file.split('.').pop();
}

function convertToCSV(file, fileType){
  if(fileType == "txt"){
      return text = s.split('\n').map(line => line.split(/\s+/).join(',')).join('\n')
  } else if(fileType == "json"){
      
  }
  else{
      return "ERROR: Not able to convert "+fileType
  }    
}
```

## Behavioral
### Command
The **Command** pattern works by wrapping the request from the sender in an object called a command. This command is then passed to the invoker object, which proceeds to look for the adequate way to process the request.
###### calculator.js
```js
class Calculator(){
    constructor(a,b){
        this.a = a;
        this.b = b;
        this.calculations = []
        this.result = Undefined
    }
    returnCalculations(){
        return this.calculations;
    }
    getResult(){
        return this.result;
    }
}
module.exports = Calculator;
```
###### sum.js
```js
//import calculator
class SumCalculator extends Calculator{
    constructor(){
        this.result = this.a+this.b;
        this.calculations.append(result);
        return this.result;
    }
}
module.exports = SumCalculator;
```
###### subtract.js
```js
//import calculator
class SubtractCalculator extends Calculator{
    constructor(){
        this.result = this.a-this.b;
        this.calculations.append(result);
        return this.result;
    }
}
module.exports = SumCalculator;
```
####### usingCalculator.js
```js
//import calculator, sumcalculator, subtractioncalculator

calculator = new Calculator(a,b)

add = new SumCalculator(calculator)
subtract = new SubtractionCalculator(calculator)

console.log(add.getResult())
console.log(subtract.getResult())
console.log(calculator.returnCalculations())
```
# SOLID Principles
1. Single-responsibility principle <br>
  The purpose of this is to prevent a programmer from making one huge document with fifteen functions. Instead, each program will have one purpose, and one purpose only. For example, with our calculator assignment that we have. A programmer could have had all the operations in one file, but instead by following the single-responsibility principle the programmer has each operand as its own file to which they are all called into a calculator file to be used.<br>
```js
function sum(a, b) {
    return a + b;
}
```
2. Open-close principle <br>
  The purpose of this is to work with the single-responsibility but also to leave a program open to expansion. Again, let us look at our calculator program, when we want to calculate an operation we don’t pull directly from each operand, we make each operand go through a model to which then we calculate our operation, so instead of having to change the code that outputs our operands we would just change the model. In another example, instead of having one function that would determine how classes should be managed we will have each class have the same function, so when we call upon that class it will do as it was programmed to do, but when we change the code we are not changing the outputter but the inputter.<br>
```js
class calculator{
    static calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static clearList(){
        this.Calculations = [];
    }
}
```
3. Liskov substitution principle <br>
  If a parent class has a child class, they should be able to work interchangeably.<br>
  In our Calculator class we use the Calculation class as well within it by setting the first and second value while assigning the third attribute as the operation.<br>
```js
class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    getResults(){
        return this.op(this.a,this.b);
    }
}

//sum class that uses the Calculation model
//In Calculator class
static sum(a,b) {
    let calculation = new Calculation(a,b,sum);
    calculator.calculations.push(calculation);
    return calculation.getResults();
}
```
4. Interface segregation principle <br>
  Every child of a class must use EVERY function of the parent function with out any errors.While using the interface segregation principle we must assign only the base functions in the parent class while defing the more intricate functions within the children class.<br>
```js
//WIP
```
5. Dependency inversion principle <br>
  Our program’s functions should not depend on one individual dependent, but an abstract dependent which can be formed into whichever dependent needed.<br>
  We want our main functions to be generic so they can do open to interpretation from other sources and that they don't need to reformat their data but just throw it into the function and have the result come out with no errors.<br>
```js
let calculation = Calculation.Create(a,b,Product);
```
