function Counter(count) {
  var count = 0;
  updateValue = function (val) {
    count = val + count;
  };
  this.up = function () {
    updateValue(1);
    console.log(count);
  };
  this.down = function () {
    updateValue(-1);
    console.log(count);
  };
}

let spinner = new Counter(5);
spinner.up();
spinner.up();
spinner.down();
