/*
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

//test case/my interpration of what I'm expecting as a result
console.log('The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13');

//fibonacci first two
// const fibonacciOne = (number) => {
//   if (number === 1 || number === 2) {
//     return 1
//   }
// }
// fibonacciOne(number)

//after first two
// fibonacciAfterTwo = (number) => {
//   fibGiven = fibonacci(number - 1) + fibonacci(number - 2)
//   //#given
//   //preceding
// }

// number generator
const fibonacci = (number) => {
  if (number === 1 || number === 2) {
    return 1
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2)
  }
}

//sequence..
// const fibSequence = (number) => {
//   // 1 = 1
//   // 2 = 1, 1
//   // 3 = 1, 1, 2
//   // 4 = 1, 1, 2, 3
//   if (number === 1) {
//     return '1'
//   }
//   if (number === 2) {
//     return `${fibSequence(number - 1)}, ${fibonacci(number)}`
//   }
//   if (number === 3) {
//     return `${fibSequence(number - 1)}, ${fibonacci(number)}`
//   }
//   if (number === 4) {
//     return `${fibSequence(number - 1)}, ${fibonacci(number)}`
//   }
//   if (number > 4) {
//     return
//   }
// }

const fibSequence = (number) => {
  //1 = 1 //2 = 1, 1 //3 = 1, 1, 2 //4 = 1, 1, 2, 3
  if (number === 1) {
    return '1'
  }
  return `${fibSequence(number - 1)}, ${fibonacci(number)}`
}

const fibSequence = (number) => number === 1 ? '1' : `${fibSequence(number - 1)}, ${fibonacci(number)}`

//try 1-2 more recursion problem in curriculum by 1/10
