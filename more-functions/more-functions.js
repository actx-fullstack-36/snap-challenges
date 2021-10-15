// Write an algorithm, either in pseudocode or in code, that converts weights to grams.  The algorithm should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".  Based on the second argument, convert the number to grams and output it.

function convertToGrams(weight, units) {
    if (units === "lbs") {
        console.log("I made it into the lbs if block")
        return weight * 453.592
    } else if (units === "oz") {
        console.log("I made it into the oz if block")
        return weight * 28.3495
    } else if(units === "kg") {
        console.log("I made it into the kg if block")
        return weight * 1000
    } else if(units === "mg") {
        return weight / 1000
    } else if(units === "g") {
        return weight
    } else {
        return "please provide the right unit abbreviation "
    }
}
//  const result = convertToGrams(35, "tyty")
// console.log("result: ", result)

// Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number.  (The factors of a number are all numbers that divide evenly into it.  For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

 function sumUniquePositiveFactors(number){
    const positiveNumber = Math.abs(number)
     let sum = 0;
    for (let i = 1; i <= positiveNumber; i++ ) { //1
        if(positiveNumber % i === 0 ){ //2
            console.log(i)
            sum = sum + i
        } //1
    } //0
    return sum
 }


const result = sumUniquePositiveFactors(100)
console.log(result)