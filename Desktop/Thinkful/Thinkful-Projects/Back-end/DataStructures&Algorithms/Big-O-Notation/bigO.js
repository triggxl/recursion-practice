/*
JavaScript: Intro to Big O Notation and Function Runtime - Eric Traub

allows us to classify how scalable an algorithm or fx is based on the input size: how much slower an algorithm will run as its input size grows : how performant an algorithm or fx is
is it either the same, proportionately larger, exponentially larger, or in some other way

https://www.youtube.com/watch?v=HgA5VOFan5E
*/


// O = fx we are evaluating (n) = # of inputs

// Time Complexity Examples:

// Constant runtime O(1) (O of 1) b/c # of operations never changes
// takes an array and logs the first two elements
function log(array) {
  console.log(array[0])
  console.log(array[1])
}

// Linear runtime: O(n) runtime is porportional to the input
// logs all items in an array
function logAll(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);

//Exponential runtime: O(n^2)
//exponential time complexity becomes very inefficient as inputs start to scale
//this nested loop gives us every possible combination of pairs in the array
//3 nested for cubic..?
function addAndLog(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j])
    }
  }
}

addAndLog(['A', 'B', 'C']) //nine pairs logged out
addAndLog(['A', 'B', 'C', 'D']) //sixteen pairs...
addAndLog(['A', 'B', 'C', 'D', 'E']) //twenty-five pairs...

//Logarithmic Runtime: O(log n) is very performant, great for large scale inputs
// list that must be sorted in some way (> to <; alphabetically..etc);
// cutting input in 1/2 each iteration
// ex: "finding a single word in a dictionary, 'house' "
function binarySearch(array, key) {
  let low = 0, high = array.length - 1, mid, element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10)
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
    return - 1;
  }

}

/*
Data Structures and Algorithms in *Java
Runtime vs. Space complexity
Trade off between saving time and saving space
https://www.youtube.com/watch?v=BBpAmxU_NQo
*/

// greet method that takes an array of strings and prints "Hi" for every name in the array
function greet(names) {
  // only allocates additional memory for this loop variable -> O(1) space
  for (let i = 0; i < names.length; i++) {
    console.log(`Hi ${names[i]}`)
  }
}

// Arrays
// used to store a list of items sequentially

