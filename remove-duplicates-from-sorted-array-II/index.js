const removeDuplicates = function (nums) {
  let duplicate = [];

  for (let i = 0; i < nums.length; i++) {
    if (!!duplicate.filter((obj) => obj.value === nums[i])[0]) {
      if (
        nums[i] === duplicate.filter((obj) => obj.value === nums[i])[0].value &&
        duplicate.filter((obj) => obj.value === nums[i])[0].times > 1
      ) {
        nums.splice(i, 1);

        [...duplicate].forEach((obj, index) => {
          if (obj.value === nums[i]) {
            duplicate[index].times = 2;
          }
        });

        i--;
      } else if (duplicate.filter((obj) => obj.value === nums[i]).length) {
        [...duplicate].forEach((obj, index) => {
          if (obj.value === nums[i]) {
            duplicate[index].times++;
          }
        });
      } else {
        duplicate.push({ value: nums[i], times: 1 });
      }
    } else {
      duplicate.push({ value: nums[i], times: 1 });
    }
  }

  return nums.length;
};
