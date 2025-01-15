const rotate = (nums, k) => {
  return nums.unshift(...nums.splice(-k % nums.length));
};
