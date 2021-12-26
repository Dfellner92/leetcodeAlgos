var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;

  String(n)
    .split("")
    .forEach((num) => (product *= parseInt(num)));
  String(n)
    .split("")
    .forEach((num) => (sum += parseInt(num)));

  return product - sum;
};

