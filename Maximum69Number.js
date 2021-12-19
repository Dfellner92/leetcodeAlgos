var maximum69Number = function (num) {
  let splitNum = String(num).split("");
  let j = 0;
  if (j === 1) {
    return splitNum;
  }
  for (let i = 0; i < splitNum.length; i++) {
    if (splitNum[i] === "6") {
      splitNum[i] = "9";
      break;
    }
  }
  return splitNum.map((num) => parseInt(num)).join("");
};

// Better solution, better space compl

var maximum69Number2 = function (num) {
  let splitNum = String(num).split("");
  for (let i = 0; i < splitNum.length; i++) {
    if (splitNum[i] === "6") {
      splitNum[i] = "9";
      break;
    }
  }
  return Number(splitNum.join(""));
};
