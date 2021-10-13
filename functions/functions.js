//Function #1
// Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.) Which operation is your choice.


/**
 * A simple function that multiplies two values
 *
 * @param {number} number1 first number to be multiplied
 * @param {number} number2 second number to be multiplied
 * @return {number} the result from multiplying number1 and number2
 **/
function multiplyTwoNumbers(number1, number2) {
    let result = number1 * number2
    return result
}

/**
 * Simple function that concatenates (combines) two strings
 *
 * @param {string} string1 first value to be concatenated
 * @param {string} string2 second value to be concatenated
 * @return {string} the combined value from concatenating two string
 */

function combineTwoStrings(string1, string2) {
    return string1 + string2
}

// const result = multiplyTwoNumbers(3,4)
// console.log(result)

const firstString = "I am a "
const secondString = "concatenated string!"

console.log(combineTwoStrings(firstString, secondString))


