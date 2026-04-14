// 1. calculateTax
// Goal: Accept a number, return tax (let's assume a standard 15% if the lab doesn't specify, or adjust the rate)
function calculateTax(amount) {
    const taxRate = 0.15; 
    return amount * taxRate;
}

// 2. convertToUpperCase
// Goal: Accept a string, return it in all caps
function convertToUpperCase(str) {
    return str.toUpperCase();
}

// 3. findMaximum
// Goal: Accept two numbers, return the bigger one
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 4. isPalindrome
// Goal: Check if a word is the same backwards (ignoring case)
function isPalindrome(word) {
    const cleanWord = word.toLowerCase();
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
}

// 5. calculateDiscountedPrice
// Goal: Take price and discount percentage, return final price
function calculateDiscountedPrice(price, discountPercentage) {
    const discountAmount = price * (discountPercentage / 100);
    return price - discountAmount;
}
console.log(calculateTax(1000)); // Should be 150
console.log(convertToUpperCase("sage")); // Should be "SAGE"
console.log(findMaximum(10, 25)); // Should be 25
console.log(isPalindrome("Racecar")); // Should be true
console.log(calculateDiscountedPrice(100, 20)); // Should be 80



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };