function add() {
  return arguments.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
