//Exercise 1: maxOfTwoNumbers()
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


//Exercise 2: isAdult()
function isAdult(number) {
    if (number >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}
console.log('Exercise 2 Result:', isAdult(21));


//Exercise 3: isCharAVowel()
const isCharAVowel = function(character) {
    if (character === 'A' || character === 'a' || character === 'E' || character === 'e' || character === 'I' || character === 'i' || character === 'O' || character === 'o' || character === 'U' || character === 'u') {
        return 'true';
    } else {
        return 'false';
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));


//Exercise 4: generateEmail()
function generateEmail(name, domain) {
    return `${name}@${domain}`;    
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//Exercise 5: greetUser()
function greetUser(name, time) {
    return `Good ${time}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


//Exercise 6: maxOfThree()
function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


//Exercise 7: calculateTip()
function calculateTip(bill, tip) {
    let convertedTip = tip / 100;
    return bill * convertedTip;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


//Exercise 8: convertTemperature()
function convertTemperature(temp, scale) {
    if (scale === 'C' || scale === 'c') {
        const newTemp = (temp * 9/5) + 32;
        const stmt = newTemp + ' F';
        return stmt;
    } else if (scale === 'F' || scale === 'f') {
        const newTemp = (temp - 32) *5/9;
        const stmt = newTemp + ' C';
        return stmt;
    } else {
        return 'Unknown scale';
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));



//Exercise 9: basicCalculator()
function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    } else {
        return 'Unkown operation';
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
