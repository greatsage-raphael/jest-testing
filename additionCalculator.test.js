// additionCalculator test

//import additionCalculator.js into test file
const additionCalculator = require("./additionCalculator")


//test is a global method that accepts 3 arguments
// 1. the name of the test
// 2. a function contaning the expectations you wish to test
//3. an optional timeOut argument
test('addition 4 and 6 to equal 10', () => {
    //expect is a jest method that lets you test output
    expect(additionCalculator(4,6)).toBe(10) // toBe is a jest matcher that enables you to comapre expect()'s argument to primitive values
 })