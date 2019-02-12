class newArr {
  constructor() {
    this.length = 0;
    this.data = {}
  };

  get(index) {
    return this.data[index]
  };

  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.length
  };

  pop() {
    var keyData = Object.keys(this.data);
    var index = Math.max(...keyData)
    var word = this.data[index]
    this.length--
    delete this.data[index]
    return word
  }

}
