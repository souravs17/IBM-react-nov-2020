let spinner = (function () {
  var count = 0;
  function updateValue(val) {
    count = val + count;
  }
  return {
    up: function () {
      updateValue(1);
      console.log(count);
    },
    down: function () {
      updateValue(-1);
      console.log(count);
    },
  };
})();
console.log(spinner);
