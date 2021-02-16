const memory = require('./memory');

class Array {
  // initializing length and allocating memory for it
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  //setting capacity to 3x memory based on length
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //explain how 'size' arg is being used in this fx
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  //retreiving values
  //adds an index offset, and gets the value stored at a memory address- both of which are O(1) operations
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  //removing values from the end of array; extra space will be filled at next push
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  //inserting values: shift all values after new, back to 1 position; then put new value in its correct place
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  // best: O(1) same as pushing
  //average: middle shift half of the values (n/2 copies) --> O(n)
  //worst: shift every value, that's n copies so it's O(n)
  // removing values: copying values backward to remove vs. forwards to create
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
  //best: O(1)
  //avg/worst: O(n)
}
//allocate more space to resize far less often (3x space) 
// Best case: O(1) operations
// Worst: remains O(n)
Array.SIZE_RATIO = 3;
//note that pushing to arrays is incredibly common then it's generally a worthwhile optimization to give you O(1) performance
