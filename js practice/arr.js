//1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
// Click me to see the solution

function is_array (givenInput){
    let checkInput = Array.isArray(givenInput);

    if(checkInput == true){
        return true;
    } else {
        return false;
    };
};

console.log(is_array('w3resources'));
console.log(is_array([1,2,3,4]));

//

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone (inputArray){
    
    let cloneinputArray= Array.from(inputArray) //[...inputArray];

    return cloneinputArray;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. 
//Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
// Click me to see the solution

// function first(array, n){
//     let first_array = array.slice(0, n)
//         return first_array;
// }

// first =  function(array, n) {
//     if (array == null) 
//     return void 0;
//   if (n == null) 
//     return array[0];
//   if (n < 0)
//     return [];
//   return array.slice(0, n);
// };


// // Test Data
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));





// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
// Click me to see the solution// question???

last =  function(array, n) {
    if (array == null) 
    return void 0;
    if (n == null)
        return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));


// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// Click me to see the solution

const myColor = ["Red", "Green", "White", "Black"]; 

console.log(myColor.join(","));
console.log(myColor.join("+"));

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// Click me to see the solution



// let user_input = prompt("Enter a number:");

// console.log(user_input.split('').join("-"));

//var num=window.prompt();
// var str = num.toString();
// var result = [str[0]];
  
// for(var x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));


// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// Click me to see the solution

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

let resultArr1 = arr1.sort(function(a,b){
    return a - b;
});

console.log(resultArr1);


// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// let resultArr1 = arr1.sort(function(a, b) {
//     return a - b;
// });

// console.log(resultArr1);


// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// Click me to see the solution

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;





// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// Click me to see the solution

var swapCase = function(letters) {
    var result = '';
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            result += letters[i].toUpperCase();
        } else {
            result += letters[i].toLowerCase();
        }
    }
    return result;
}

var text = "The Lazy Quick Brown Fox."

console.log(swapCase(text));

// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------
// Click me to see the solution

var changeToString = function(givenArray){
     for(let i = 0; i < givenArray.length; i++){
        console.log("row " + i);
        for(let j = 0; j < givenArray[i].length; j++){
            console.log(" " + givenArray[i][j]);
        }
    }
}

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
changeToString(a);



// 11. Write a JavaScript program to find the sum of squares of a numerical vector.
// Click me to see the solution

// const sum_sq = (array) => {
//     let sum = 0;

//     array.forEach((element) => {
//         sum += Math.pow(element, 2)        
//     });
//     return sum;
// };

// console.log(sum_sq([0,1,2,3,4]))

// 12. Write a JavaScript program to compute the sum and product of an array of integers.
// Click me to see the solution




// 13. Write a JavaScript program to add items to a blank array and display them.
// Sample Screen :
// add elements in an blank array
// Click me to see the solution


addArray = () => {
    let result = [];

    let userInput = prompt("Enter a number (or enter a non-numeric value to stop):");

    while (!isNaN(userInput)) {
        result.push(parseInt(userInput));
        userInput = prompt("Enter another number (or enter a non-numeric value to stop):");
    }

    return result;
}

console.log(addArray());

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// Click me to see the solution

// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.
// Click me to see the solution

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}

// 16. Write a JavaScript program to find the leap years in a given range of years.
// Click me to see the solution

function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(
function(year)
{ 
   if (test_LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}


// 17. Write a JavaScript program to shuffle an array.
// Click me to see the solution

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

//another way

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
shuffleArray(myArray);
console.log(myArray);


// 18. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4
// Click me to see the solution

function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));

// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
// Click me to see the solution

function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.
// Click me to see the solution

function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]
// Click me to see the solution

const nestedArray = [1, [2],[3,[[4]]],[5,6]];
const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray);

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
// Click me to see the solution



function union(arr1, arr2){
    const uniqueSet = new Set([...arr1, ...arr2]);
   
    const unionArray = [...uniqueSet];
   
    return unionArray;
   }
   
   let array1 = [1,1,2,3];
   let array2 = [4,5,6,7];
   
   let mergeArray = union(array1, array2)
   
   console.log(mergeArray);
// 23. Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// Click me to see the solution

const differenceOf2Arrays = (array1, array2) => {
    let temp = [];
  
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
  
    for(let i of array1){
      if(array2.indexOf(i) === -1)
      temp.push(i);
    }
  
    for(let i of array2){
      if(array1.indexOf(i) === -1)
      temp.push(i);
    }
  
    return temp.sort((a, b) => a-b);
  };
  
  console.log(differenceOf2Arrays([1,2,3], [100,2,1,10]));

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// Click me to see the solution

const originalArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];
const filteredArray = originalArray.filter(Boolean);

console.log(filteredArray);

// 25. Write a JavaScript function to sort the following array of objects by title value.
// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
// Expected result :

// [[object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, [object Object] {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]
// Click me to see the solution

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
  ];
  
  function sortByTitle(array) {
    // Use the sort() method with a custom comparison function
    array.sort((a, b) => {
      const titleA = a.title.toUpperCase(); // Convert titles to uppercase for case-insensitive sorting
      const titleB = b.title.toUpperCase();
  
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0; // Titles are equal
    });
  }
  
  // Call the function to sort the library array by title
  sortByTitle(library);
  
  // Display the sorted array
  console.log(library);
  

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

// Click me to see the solution

function findIndicesForTarget(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j];
        }
      }
    }
    // Return null if no such pair is found
    return null;
  }
  
  // Example usage:
  const numbers = [10, 20, 10, 40, 50, 60, 70];
  const target = 50;
  
  const result = findIndicesForTarget(numbers, target);
  
  if (result) {
    const [index1, index2] = result;
    console.log(`Output: ${index1}, ${index2}`);
  } else {
    console.log("No pair found for the target sum.");
  }
  

// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// Click me to see the solution

const originalArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];
const filteredArray = originalArray.filter(Boolean);

console.log(filteredArray);

// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.

// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"

// Click me to see the solution

function longest_common_starting_substring(arr) {
    if (!arr || arr.length === 0) {
      return '';
    }
  
    const firstString = arr[0];
    let commonSubstring = '';
  
    for (let i = 0; i < firstString.length; i++) {
      const currentChar = firstString[i];
  
      if (arr.every(str => str[i] === currentChar)) {
        commonSubstring += currentChar;
      } else {
        break;
      }
    }
  
    return commonSubstring;
  }
  
  // Example usage:
  console.log(longest_common_starting_substring(['go', 'google']));
  // Output: "go"
  

// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function num_string_range(start, end, step) {
    const result = [];
  
    if (typeof start === 'number' && typeof end === 'number' && typeof step === 'number') {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else if (typeof start === 'string' && typeof end === 'string' && start.length === 1 && end.length === 1 && typeof step === 'number') {
      const startCharCode = start.charCodeAt(0);
      const endCharCode = end.charCodeAt(0);
  
      for (let i = startCharCode; i <= endCharCode; i += step) {
        result.push(String.fromCharCode(i));
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(num_string_range('a', 'z', 2));
  // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
  


// Click me to see the solution
// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

// Click me to see the solution

function mergeArrays(array1, array2) {
    // Use Set to handle unique elements
    const uniqueSet = new Set([...array1, ...array2]);
  
    // Convert Set back to an array
    const mergedArray = Array.from(uniqueSet);
  
    return mergedArray;
  }
  
  // Example usage:
  var array1 = [1, 2, 3];
  var array2 = [2, 30, 1];
  
  console.log(mergeArrays(array1, array2));
  // Output: [1, 2, 3, 30]
  

// 31. Write a JavaScript function to remove a specific element from an array.

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]
// Click me to see the solution

function remove_array_element(arr, element) {
    // Use indexOf to find the index of the element
    const index = arr.indexOf(element);
  
    // Check if the element is found in the array
    if (index !== -1) {
      // Use splice to remove the element at the found index
      arr.splice(index, 1);
    }
  
    return arr;
  }
  
  // Example usage:
  const originalArray22 = [2, 5, 9, 6];
  console.log(remove_array_element(originalArray, 5));
  // Output: [2, 9, 6]
  


// 32. Write a JavaScript function to find an array containing a specific element.

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]
// Click me to see the solution

function contains(arr, target) {
    return arr.includes(target);
  }
  
  // Example usage:
  const arr = [2, 5, 9, 6];
  console.log(contains(arr, 5));
  // Output: true
  

// 33. Write a JavaScript script to empty an array while keeping the original.

// Click me to see the solution.
// Declare and initialize an array
var arr4 = [1, 3, 6, 3, -5];

// Output the contents of the array before modification
console.log(arr4);

// Set the length of the array to 0, effectively clearing its contents
arr4.length = 0;

// Output the contents of the array after modification
console.log(arr4);
// 34. Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
function nthLargestElement(arr, n) {
  if (n > 0 && n <= arr.length) {
      // Sort the array in descending order
      const sortedArray = arr.sort((a, b) => b - a);
      
      // Return the nth largest element
      return sortedArray[n - 1];
  } else {
      return "Invalid value of n. It should be between 1 and the array length.";
  }
}

// Example usage:
const unsortedArray = [4, 2, 8, 1, 7, 5];
const nthLargest = nthLargestElement(unsortedArray, 3);

console.log(`The 3rd largest element is: ${nthLargest}`);

/*The n - 1 is used because array indices in JavaScript (and many programming languages) start from 0. When you sort the array in descending order, the largest element will be at index 0, the second largest at index 1, and so on.

So, if you want the nth largest element, you would access it at index n - 1 after sorting. For example:

1st largest element is at index 0 (n - 1 when n = 1).
2nd largest element is at index 1 (n - 1 when n = 2).
3rd largest element is at index 2 (n - 1 when n = 3), and so on.
By using n - 1, you adjust for the zero-based indexing convention.*/


// Click me to see the solution

// 35. Write a JavaScript function to get random items from an array.

// Click me to see the solution

// Function to return a random item from an array
function random_item(items) {
  // Use Math.random() to generate a random number between 0 and 1,
  // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
  return items[Math.floor(Math.random() * items.length)];
}

// Declare and initialize an array of items
var items = [254, 45, 212, 365, 2543];

// Output the result of the random_item function with the array of items
console.log(random_item(items));

// 36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]
function array_filled(length, value) {
  // Use the Array constructor with fill method
  return Array(length).fill(value);
}

// Test Data:
console.log(array_filled(6, 0)); // Output: [0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11)); // Output: [11, 11, 11, 11]

// Click me to see the solution

// 37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]
// Click me to see the solution

function array_filled(length, value) {
  // Use the Array constructor with fill method
  return Array(length).fill(value);
}

// Test Data:
console.log(array_filled(3, 'default value')); // Output: ["default value", "default value", "default value"]
console.log(array_filled(4, 'password')); // Output: ["password", "password", "password", "password"]


// 38. Write a JavaScript function to move an array element from one position to another.

// Test Data :
//              console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]
// Click me to see the solution

function move(array, fromIndex, toIndex) {
  // Check if fromIndex and toIndex are within the array bounds
  if (
      fromIndex >= 0 &&
      fromIndex < array.length &&
      toIndex >= 0 &&
      toIndex < array.length
  ) {
      // Use splice to remove the element from the fromIndex and insert it at the toIndex
      const element = array.splice(fromIndex, 1)[0];
      array.splice(toIndex, 0, element);
  } else {
      console.error("Invalid fromIndex or toIndex");
  }

  return array;
}

// Test Data:
console.log(move([10, 20, 30, 40, 50], 0, 2)); // Output: [20, 30, 10, 40, 50]

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]
// Click me to see the solution

function filter_array_values(arr) {
  // Use filter method to remove false, null, 0, and blank values
  return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

// Test Data:
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); 
// Output: [58, "abcd", true]

// 40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

// Click me to see the solution

// Function to generate an array of numbers in a specified range
function array_range(start, len) 
{
  // Create a new array with the specified length using Array.from
  const arr = Array.from({ length: len }, (_, index) => start + index);

  // Return the generated array
  return arr;
}

// Output the result of generating an array with a starting value of 1 and a length of 4
console.log(array_range(1, 4));

// Output the result of generating an array with a starting value of -6 and a length of 4
console.log(array_range(-6, 4));

// 41. Write a JavaScript function to generate an array between two integers of 1 step length.

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
// Click me to see the solution

// 42. Write a JavaScript function to find unique elements in two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// Click me to see the solution

// 43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]
// Click me to see the solution

// 44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.

// Test Data :
// indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
// Expected Output:
// {"undefined":{"id":20,"name":"orange"}}
// Click me to see the solution

// 45. Write a JavaScript program to find all the unique values in a set of numbers.

// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]
// Click me to see the solution

// 46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

// Test Data :
// [1, 33, 5]
// [1, 3, 5, 7]
// [2, 4]
// Expected Output:
// [[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
// [[1,3,5,7],[1,3,7,5],[1,5,3,7],[1,5,7,3],[1,7,3,5],[1,7,5,3],[3,1,5,7],[3,1,7,5],[3,5,1,7],[3,5,7,1],[3,7,1,5],[3,7,5,1],[5,1,3,7],[5,1,7,3],[5,3,1,7],[5,3,7,1],[5,7,1,3],[5,7,3,1],[7,1,3,5],[7,1,5,3],[7,3,1,5],[7,3,5,1],[7,5,1,3],[7,5,3,1]]
// [[2,4],[4,2]]
// Click me to see the solution

// 47. Write a JavaScript program to remove all false values from an object or array.

// Test Data :
// const obj = {
// a: null,
// b: false,
// c: true,
// d: 0,
// e: 1,
// f: '',
// g: 'a',
// h: [null, false, '', true, 1, 'a'],
// i: { j: 0, k: false, l: 'a' }
// Expected Output:
// {"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}
// Click me to see the solution

// 48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false
// Click me to see the solution

// 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0
// Expected Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0
// Click me to see the solution

// 50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25
// Click me to see the solution

// 51. Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
// Expected Output:
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// false
// Click me to see the solution

// 52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:
// Click me to see the solution

// 53. Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3
// Click me to see the solution
