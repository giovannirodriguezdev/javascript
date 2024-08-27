/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers. DONE
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one. DONE
 *      3. The result of multiplying all the numbers. DONE
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones. DONE
 *      5. The result of the the numbers modulo 7. DONE
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let num1 = 1234;
let num2 = 2345;
let num3 = 3456;
let luckyNumber = 7891;
let sum = num1 + num2 + num3 + luckyNumber;
console.log(sum);

let smallNum = num1 + num2;
let largeNum = num3 + luckyNumber;
let total = largeNum - smallNum;
console.log(total);

let multiplied = num1 * num2 * num3 * luckyNumber;
console.log(multiplied);

let divided = largeNum/smallNum;
console.log(divided);

let mod = sum % 7;
console.log("Label", mod)
