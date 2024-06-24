class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    console.log(this.data);
  }
}

const myNewArray = new MyArray();
console.log(myNewArray.push("apple"));
