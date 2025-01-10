var removeDuplicates = function (nums) {
  let duplicate = null

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === duplicate) {
          nums.splice(i, 1)
          i--

      } else {
          duplicate = nums[i]
      }
  }

  return nums.length
};