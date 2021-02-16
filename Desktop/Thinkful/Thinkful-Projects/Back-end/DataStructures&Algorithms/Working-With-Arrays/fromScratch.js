const memory = require('./memory');

class Array {
  constuctor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr_memory.allocate(this.length);
  }

}
Array.SIZE_RATIO = 3

/*
Write out psuedocode for Questions: 2, 3, 5 
Review assignment questions and write out steps to complete (fromScratch.js)
https://courses.thinkful.com/dsa-v1/checkpoint/4
Not sure how to approach these questions
2.) on...I don't understand how to use the fx to as directed to produce the result
*/
function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
}

main()

