var shuffle = function (nums, n) {
  const halfOne = nums.slice(0, n);
  const halfTwo = nums.slice(n, nums.length);
  const shuffledArr = [];

  for (let i = 0; i < n; i++) {
    shuffledArr.push(halfOne[i]);
    shuffledArr.push(halfTwo[i]);
  }

  return shuffledArr;
  return halfOne;
};


var shuffle2 = function(nums, n) {
    let i = 0;
    let len = nums.length;
    while(i < len) {
        const temp = nums[i + n];
        nums.splice(i+1, 0, temp); // insert element at alternate index
        i += 2; // since array size is increased, increment i by 2
    }
    let j = n;
    while(j > 0) { // remove all elements which are shuffled already
        nums.splice(nums.length - 1, 1);
        j--;
    }
    return nums;
}