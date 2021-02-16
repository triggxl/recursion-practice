class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }
  //contiguous block of memory consisting of box 'sizes'
  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }
  // ptr = variables containing memory addresses
  free(ptr) { }

  //copies size box data from pointer to pointer
  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }
  //returns the value stored at a certain memory address
  get(ptr) {
    return this.memory[ptr];
  }
  //sets the value stored at a certain memory address
  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;

//https://gist.github.com/tparveen/c78e560c996a745dae41c1f8f2650491