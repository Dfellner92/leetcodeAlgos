var findDuplicates = function (nums) {
  let dictionary = {};
  let duplicates = [];
  nums.forEach((num) =>
    dictionary.hasOwnProperty(num)
      ? (dictionary[num] = dictionary[num] + 1)
      : (dictionary[num] = 1)
  );
  for (const key in dictionary) {
    if (dictionary[key] > 1) {
      duplicates.push(key);
    }
  }
  return duplicates;
};
