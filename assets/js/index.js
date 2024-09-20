// 1. Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"

// Answer to the question No : 1

let str = 'Bangladesh'

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString(str))


// 2. Write a function sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10

// Answer to the question No: 2

const arr = [20,30,55,35,66]

function sumArray(arr){
    let sum = 0;
    for (const num of arr){
        sum += num;
    }
    return sum;
}

console.log(sumArray(arr))


// 3. Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]

// Answer to the question No: 3

const arrayOfNumbers = [5,13,5,22,67,145,22,145,999]

function removeDuplicates(arrayOfNumbers){
    return arrayOfNumbers.filter((value, index) => arrayOfNumbers.indexOf(value) === index);
}

console.log(removeDuplicates(arrayOfNumbers))


// 4.  Write a function celsiusToFahrenheit(celsius) that takes a temperature in Celsius and converts it to Fahrenheit. The formula to convert Celsius to Fahrenheit is:
//
//     Fahrenheit=(celsius * 9/5)+32
//
// Example: console.log(celsiusToFahrenheit(25)); // Output: 77




// Answer to the question No: 4

const celsius = 38
function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(celsius))
