var singleNumber = function (nums) {
  let cipher = {};

  nums.forEach((num) =>
    cipher.hasOwnProperty(num)
      ? (cipher[num] = cipher[num] + 1)
      : (cipher[num] = 1)
  );

  for (const key in cipher) {
    if (cipher[key] === 1) {
      return key;
    }
  }
};
