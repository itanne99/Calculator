const Calculator = require('../js/calculator');
const CSVFile = require('../js/csvReader/CSVReader');


test('Calculator adding two numbers', () => {
    console.log("****** Testing Addition ******")
    CSVFile.getRecords('testCases/testSum.csv').forEach(function(row, index){
        /*For row in csvReader*/
        let result = Calculator.sum(parseInt(row[0]), parseInt(row[1])) /*row[0],row[1]*/
        expect(result).toBe(parseInt(row[2])); /*toBe(row[2])*/
    })
});

test('Calculator difference between two numbers', () => {
    console.log("****** Testing Subtraction ******")
    CSVFile.getRecords('testCases/testSubtraction.csv').forEach(function(row, index){
        /*For row in csvReader*/
        let result = Calculator.subtract(parseInt(row[0]), parseInt(row[1])) /*row[0],row[1]*/
        expect(result).toBe(parseInt(row[2])); /*toBe(row[2])*/
    })
});

test('Calculator product of two numbers', () => {
    console.log("****** Testing Multiply ******")
    CSVFile.getRecords('testCases/testMultiply.csv').forEach(function(row, index){
        /*For row in csvReader*/
        let result = Calculator.multiply(parseInt(row[0]), parseInt(row[1])) /*row[0],row[1]*/
        expect(result).toBe(parseInt(row[2])); /*toBe(row[2])*/
    })
});

test('Calculator quotient of two numbers', () => {
    console.log("****** Testing Divide ******")
    CSVFile.getRecords('testCases/testDivide.csv').forEach(function(row, index){
        /*For row in csvReader*/
        let result = Calculator.divide(parseFloat(row[0]), parseFloat(row[1])) /*row[0],row[1]*/
        expect(result).toBe(parseFloat(row[2])); /*toBe(row[2])*/
    })
});

test('Calculator power squared of a number', () => {
    console.log("****** Testing Power ******")
    CSVFile.getRecords('testCases/testPower.csv').forEach(function(row, index){
        /*For row in csvReader*/
        let result = Calculator.power(parseInt(row[0]), 2) /*row[0],row[1]*/
        expect(result).toBe(parseInt(row[1])); /*toBe(row[2])*/
    })
});

test('Calculator squared root of a number', () => {
    console.log("****** Testing Root ******")
    CSVFile.getRecords('testCases/testRoot.csv').forEach(function(row, index){
        /*For row in csvReader*/
        let result = Calculator.root(parseFloat(row[0]), 2) /*row[0],row[1]*/
        expect(result).toBe(parseFloat(row[1])); /*toBe(row[2])*/
    })
});