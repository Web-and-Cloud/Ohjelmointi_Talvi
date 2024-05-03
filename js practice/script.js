// Declare two variables, firstName and lastName, and assign them your first and last names, respectively.
// Concatenate them and store the result in a new variable called fullName.
// Print fullName to the console.

let firstName = "Nazneen";
let lastName = "Aktar";

let fullName = firstName +" "+ lastName;

console.log(fullName);

//String Length:

// Declare a variable sentence and assign it a string of your choice.
// Calculate and print the length of the string using the length property.

let myString = "abcdefghijkl";

console.log(myString.length);

//Substring:

// Declare a variable longString and assign it a string of your choice with at least 20 characters.
// Extract and print a substring containing the first 10 characters.

let longString = "Shining star blooming flower glowing sun";

let mySubstring = longString.substring(0, 11);

console.log(mySubstring);

// Uppercase and Lowercase:

// Declare a variable mixedCase and assign it a string with a mix of uppercase and lowercase letters.
// Convert the string to all uppercase and print the result.
// Convert the string to all lowercase and print the result.

let mixedCase = "Hello! Good Morning.";

console.log(mixedCase.toUpperCase());

console.log(mixedCase.toLowerCase());

//String Comparison:

// Declare two variables, string1 and string2, and assign them different strings.
// Compare the two strings using the equality operator (==) and print the result.
// Compare the two strings using the strict equality operator (===) and print the result.

let string1 = "erna";
let string2 = "erna";


let result1 = (string1 == string2) ? "same":"not same";

console.log(result1);

let result2 = (string1 === string2) ? "same":"not same";

console.log(result2);

// String Reversal:

// Declare a variable originalString and assign it a string of your choice.
// Create a new variable reversedString that contains the reversed version of originalString.
// Print both the original and reversed strings.

let originalString = "Bangladesh";
let reversedString = (str) => {
  return str.split("").reverse().join("");
}

console.log(reversedString(originalString));

// Replace:

// Declare a variable sentence and assign it a string that contains a word you want to replace.
// Replace the word with another of your choice using the replace method and print the updated sentence.

let sentence = "I love Bangladesh";

let updatedSentence = sentence.replace("I", "You");

console.log(updatedSentence);

// Count Occurrences:

// Declare a variable paragraph and assign it a long string of your choice.
// Count and print the number of occurrences of a specific word within the paragraph.

let paragraph = "I live in Finland. Finland is a beeautiful country."
var count = (paragraph.match(/Finland/g) || []).length;
console.log(count);

// Trimming Whitespaces:

// Declare a variable withSpaces and assign it a string with leading and trailing whitespaces.
// Use the trim method to remove the whitespaces and print the result.

let withSpaces = "  String with Space  ";

let result = withSpaces.trim();

console.log(result);





// String Template:

// Declare variables for item and price with values of your choice.
// Create a string template that includes these variables to form a sentence like "The price of ITEM is PRICE." and print the result.

let item = "Apple"
let price = "2 euro"
let template = `The price of ${item} is ${price}`
console.log(template);

// Palindrome Check:

// Create a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise.
// Test the function with different examples.

function isPalindrome(str){
  var reg = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(reg, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));



// Character Frequency:

// Write a function called charFrequency that takes a string as input and returns an object containing the frequency of each character in the string.
// For example, given the input "hello", the function should return { h: 1, e: 1, l: 2, o: 1 }.

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
console.log(repeatStringNumTimes("hello",2));


// Title Case:

// Write a function called titleCase that takes a sentence as input and returns the sentence with the first letter of each word capitalized.
// For example, given the input "this is a title", the function should return "This Is A Title".

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(titleCase("I'm a little tea pot"));

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }
// titleCase("I'm a little tea pot");


// String Rotation:

// Write a function called isRotation that takes two strings as arguments and returns true if one string is a rotation of the other, and false otherwise.
// For example, given the strings "abcde" and "eabcd", the function should return true.
// Vowel Count:

// Write a function called vowelCount that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Test the function with different examples.
// String Shuffle:

// Write a function called shuffleString that takes a string as input and returns a new string with the characters randomly shuffled.
// Tip: You can convert the string to an array, use array shuffling techniques, and then join it back into a string.
// Camel Case Conversion:

// Write a function called toCamelCase that converts a hyphenated or underscored string to camel case. For example, "my-variable" should become "myVariable".
// Longest Word:

// Write a function called findLongestWord that takes a sentence as input and returns the longest word in the sentence.
// For example, given the input "The quick brown fox jumps over the lazy dog", the function should return "jumps".
// String Compression:

// Write a function called compressString that takes a string as input and returns a compressed version using the counts of repeated characters. For example, "aaabbbbcc" should become "a3b4c2".
// Substring Index:

// Write a function called substringIndex that takes two strings as arguments and returns the index of the first occurrence of the second string within the first string. If the second string is not found, return -1.


let text = "5";
let padded = text.padStart(4,"0");

console.log(padded);

//const fruits = ["Banana", "Orange", "Apple"];

//console.log(Array.isArray(fruits));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.splice(2, 2, "Lemon", "Kiwi"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(0, 1));

