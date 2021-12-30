var numOfStrings = function (patterns, word) {
  let Regexes = [];
  patterns.forEach((el) => Regexes.push(new RegExp(el)));
  return Regexes.filter((el) => word.match(el)).length;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));


// needs work on time complexity