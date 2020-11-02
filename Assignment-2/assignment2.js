let spinner = (function () {
  var count = 0;
  function updateValue(val) {
    return val + count;
  }
  return {
    up: function () {
      return updateValue(1);
    },
    down: function () {
      return updateValue(-1);
    },
    getValue: function () {
      return count;
    },
  };
})();
console.log(spinner);
