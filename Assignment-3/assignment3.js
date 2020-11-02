function Counter(count) {
  this.count = count;
  this.updateValue = function (val) {
    this.count = val + this.count;
  };
  this.up = function () {
    this.updateValue(1);
    console.log(this.count);
  };
  this.down = function () {
    this.updateValue(-1);
    console.log(this.count);
  };
}

let spinner = new Counter(5);
spinner.up();
spinner.up();
spinner.down();
